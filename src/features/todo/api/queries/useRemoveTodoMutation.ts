import { TodoService } from '@/features/todo'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useRemoveTodoMutation = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: TodoService.removeTodo,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] })
    })
}