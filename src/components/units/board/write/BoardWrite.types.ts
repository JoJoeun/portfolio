import { ChangeEvent } from "react"
import { IQuery } from "../../../../commons/types/generated/types"


export interface BoardWriteProps {
    isEdit: boolean
    data?:Pick<IQuery,"fetchBoard">
}

export interface BoardWriteUIProps {
    onChangeBoard: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onClickSubmit: () => void
    onClickUpdate: () => void
    isActive: boolean
    isEdit: boolean
    data?: Pick<IQuery,"fetchBoard">
    error: ErrorState
}

export interface Board {
    writer: string
    password: string
    title: string
    contents: string
}

export interface ErrorState {
    writer: string
    password: string
    title: string
    contents: string
}

export interface ISubmitButtonProps {
    isActive: boolean
}