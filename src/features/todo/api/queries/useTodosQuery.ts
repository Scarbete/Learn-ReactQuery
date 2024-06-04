import { keepPreviousData, useQuery} from '@tanstack/react-query'
import { TodoService } from '@/features/todo'

export const useTodosQuery = (limit?: number, page?: number) => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: () => TodoService.fetchTodos(limit, page),
        retry: 1,
        retryOnMount: false,
        placeholderData: keepPreviousData
    })
}