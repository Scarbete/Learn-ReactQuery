import {
    Todo,
    TodoFormField,
    TodoFormKeysEnum,
    TodoFormState,
    useCreateTodoMutation
} from '@/features/todo'

import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './TodoForm.module.scss'


const TodoForm = () => {
    const todoCreateMutation = useCreateTodoMutation()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<TodoFormState>({
        mode: 'onChange',
        defaultValues: {
            title: '',
            description: ''
        }
    })

    const createTodoSubmit: SubmitHandler<TodoFormState> = (formData) => {
        const newTodo: Required<Todo> = {
            id: Date.now(),
            title: formData.title,
            description: formData.description,
            completed: false
        }
        todoCreateMutation.mutate(newTodo)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(createTodoSubmit)} className={styles.form}>
            <TodoFormField
                name={TodoFormKeysEnum.TITLE}
                register={register}
                error={errors.title?.message}
                placeholder={'Enter title'}
            />
            <TodoFormField
                name={TodoFormKeysEnum.DESCRIPTION}
                register={register}
                error={errors.description?.message}
                placeholder={'Enter description'}
            />
            <button disabled={todoCreateMutation.isPending}>
                {todoCreateMutation.isPending
                    ? 'loading'
                    : 'create'
                }
            </button>
        </form>
    )
}

export default TodoForm