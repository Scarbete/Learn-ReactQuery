
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

export type TodoFormState = Required<Pick<Todo, 'title' | 'description'>>

export type EditTodoMutationFnArgs = {
    id: number
    newTodo: Todo
}