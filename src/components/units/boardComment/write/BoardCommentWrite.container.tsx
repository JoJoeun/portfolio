import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";
import { IMutation, IMutationCreateBoardCommentArgs } from "../../../../commons/types/generated/types";

import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";

export default function BoardCommentWrite() {
    const router = useRouter();

    const [ writer, setWriter ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ contents, setContents ] = useState("");

    const [ createBoardComment ] = useMutation<Pick<IMutation,"createBoardComment">, IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT);

    const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
        setWriter(e.target.value)
    }

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContents(e.target.value)
    }

    const onClickWrite = async () => {
        try {
            if(typeof router.query.boardId !== "string") {
                alert("시스템 구조에 문제가 있습니다.")
                return; //종료
            }
            await createBoardComment({
                variables: {
                    createBoardCommentInput: {
                        writer,
                        password,
                        contents,
                        // 별점
                        rating: 0,
                    },
                    boardId: router.query.boardId,
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId }
                    }
                ]
            })
        }
        catch(error) {
            // ~로 부터 만들어진 ~가 가진 기능을 만들어진게 사용할 수 있게 됨
            if(error instanceof Error) alert(error.message)
        }
    }


    return <BoardCommentWriteUI 
                onChangeWriter= {onChangeWriter}
                onChangePassword= {onChangePassword}
                onChangeContents= {onChangeContents}
                onClickWrite= {onClickWrite}
                contents={contents}
            />
}