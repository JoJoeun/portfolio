import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface BoardCommentListUIProps {
    data?: Pick<IQuery, "fetchBoardComments">;
    onClickDelete: (e: MouseEvent<HTMLImageElement>) => void

}