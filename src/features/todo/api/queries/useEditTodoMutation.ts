import { EditTodoMutationFnArgs, TodoService } from '@/features/todo'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useEditTodoMutation = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ id, newTodo }: EditTodoMutationFnArgs) => {
            return TodoService.editTodo(id, newTodo)
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] })
    })
}