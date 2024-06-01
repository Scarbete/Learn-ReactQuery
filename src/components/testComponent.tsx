import { useQueryClient } from '@tanstack/react-query'
import { Todo } from '@/components/todo'


const TestComponent = () => {
    const queryClient = useQueryClient()
    const data = queryClient.getQueryData<Todo[]>(['todos'])

    console.log('data', data)

    return (
        <div>

        </div>
    )
}

export default TestComponent