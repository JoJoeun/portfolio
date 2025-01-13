import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { MouseEvent } from 'react';

import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from './BoardCommentList.queries';
import { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from '../../../../commons/types/generated/types';

import BoardCommentListUI from './BoardCommentList.presenter'

export default function BoardCommentList() {
    const router = useRouter();
    if(!router || typeof router.query.boardId !== "string") return<></>

    const [deleteBoardComment] = useMutation<Pick<IMutation, "deleteBoardComment">, IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT);

    const { data } = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
        variables: {boardId: router.query.boardId}
    })

    const onClickDelete = async(e: MouseEvent<HTMLImageElement>) => {
        const password = prompt("비밀번호를 입력하세요.")
        try {
            // 타겟이 이미지가 아니면!
            if(!(e.target instanceof HTMLImageElement)) {
                alert("시스템에 문제가 있습니다.");
                return; 
            }

            await deleteBoardComment({
                variables: {
                    password,
                    boardCommentId: e.target.id
                },
                // 새로고침 없이 백이 아닌 화면에서도 적용
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId }
                    }
                ]
            })
        }
        catch (error) {
            if(error instanceof Error) alert(error.message)
        }
    }


    return <BoardCommentListUI 
                data={data} 
                onClickDelete={onClickDelete}
            />

}