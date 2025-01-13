import { gql } from '@apollo/client';


export const CREATE_BOARD_COMMENT = gql`
    mutation createBoardComment(
        $createBoardCommentInput: CreateBoardCommentInput!,
        $boardId: ID!
    ) {
        createBoardInput(
                createBoardCommentInput: $createBoardCommentInput, 
                boardId: $boardId
            ) {
                _id
            }
    }
`