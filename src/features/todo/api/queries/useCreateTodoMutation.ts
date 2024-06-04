import { TodoService } from '@/features/todo'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateTodoMutation = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: TodoService.createTodo,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] })
    })
}