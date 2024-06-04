import { RegisterOptions } from 'react-hook-form'

export type Todo = Partial<{
    id: number
    title: string
    description: string
    completed: boolean
}>

export type FetchTodosParams = {
    limit?: number
    page?: number
}

export type FetchTodosError = {
    message: string
    status: number
}

export type FetchTodosResult = ( Todo[] | FetchTodosError )

export enum TodoFormKeysEnum {
    TITLE = 'title',
    DESCRIPTION = 'description'
}

export type TodoFormState = Required<Pick<Todo, TodoFormKeysEnum.TITLE | TodoFormKeysEnum.DESCRIPTION>>

export type EditTodoMutationFnArgs = {
    id: number
    newTodo: Todo
}

export type TodoFormValidation = Record<TodoFormKeysEnum, RegisterOptions>