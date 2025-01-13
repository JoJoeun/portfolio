import { gql } from '@apollo/client';

export const FETCH_BOARD_COMMENTS = gql`
    query fetchBoardComment($page: Int, $boardId: ID!) {
        fetchBoardComment(page:$page, boardId: $boardId) {
            _id
            writer
            contents
            createdAt
            rating
        }
    }
`

export const DELETE_BOARD_COMMENT = gql`
    mutation deleteBoardComment($password: string, $boardCommentId: ID!) {
        deleteBoardComment(password: $password, boardCommentID: $boardCommentId)
    }
`