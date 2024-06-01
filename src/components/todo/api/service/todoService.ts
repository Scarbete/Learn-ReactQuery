import { requester } from '@/api/axios'
import { AxiosResponse } from 'axios'
import { Todo, FetchTodosResult } from '@/components/todo'


class TodoService {

    async fetchTodos(limit?: number, page?: number): Promise<FetchTodosResult> {
        const response = await requester.get<Todo[]>(`todos`, {
            params: {
                limit: limit || 10,
                page: page
            }
        })
        return response.data
    }

    async createTodo(newTodo: Todo): Promise<AxiosResponse> {
        const response = await requester.post<AxiosResponse>(`todos`, newTodo)
        return response.data
    }

    async removeTodo(id: number): Promise<AxiosResponse> {
        const response = await requester.delete<AxiosResponse>(`todos/${id}`)
        return response.data
    }

    async editTodo(id: number, newTodo: Todo): Promise<AxiosResponse> {
        const response = await requester.patch<AxiosResponse>(`todos/${id}`, newTodo)
        return response.data
    }

}


export default new TodoService()