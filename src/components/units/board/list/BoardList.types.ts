import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface BoardListUIProps {
    data?: Pick<IQuery, "fetchBoards">
    onClickMoveToBoardNew: () => void
    onClickMoveToBoardDetail: (e: MouseEvent<HTMLTableCellElement>) => void
}