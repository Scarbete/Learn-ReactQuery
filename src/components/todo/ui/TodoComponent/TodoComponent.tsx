import {
    useTodoModel,
    useTodosQuery,
    useCreateTodoMutation,
    useRemoveTodoMutation,
    useEditTodoMutation,
    Todo,
    TodoFormState
} from '@/components/todo'

import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './TodoComponent.module.scss'


const TodoComponent = () => {
    const { limit, page } = useTodoModel()
    const todosQuery = useTodosQuery(limit, page)
    const todoCreateMutation = useCreateTodoMutation()
    const removeTodoMutation = useRemoveTodoMutation()
    const editTodoMutation = useEditTodoMutation()

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

    const todosArray: Todo[] = Array.isArray(todosQuery.data) ? todosQuery.data : []

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

    const handleRemoveTodo = (id?: number | undefined) => {
        if (!id) return
        removeTodoMutation.mutate(id)
    }

    const handleEditTodo = (id?: number | undefined) => {
        if (!id) return

        const title = prompt('Enter new title') || ''
        const description = prompt('Enter new description') || ''

        const newTodo: Todo = {
            id,
            title,
            description,
            completed: false
        }
        editTodoMutation.mutate({ id, newTodo })
    }

    return (
        <section>
            <form onSubmit={handleSubmit(createTodoSubmit)} className={styles.form}>
                <label>
                    {errors.title && <span>{errors.title.message}</span>}
                    <input
                        {...register('title', {
                            required: 'Field is required',
                            pattern: {
                                value: /\w{3,60}/,
                                message: '3 - 60 symbols'
                            }
                        })}
                        type={'text'}
                        placeholder={'Enter title'}
                    />
                </label>
                <label>
                    {errors.description && <span>{errors.description.message}</span>}
                    <input
                        {...register('description', {
                            required: 'Field is required',
                            pattern: {
                                value: /\w{3,60}/,
                                message: '3 - 60 symbols'
                            }
                        })}
                        type={'text'}
                        placeholder={'Enter description'}
                    />
                </label>
                <button disabled={todoCreateMutation.isPending}>
                    {todoCreateMutation.isPending ? 'loading' : 'create'}
                </button>
            </form>
            {todosQuery.isLoading && <p>...loading</p>}
            {todosQuery.isError && <p>{todosQuery.error.message}</p>}
            <ul className={styles.todoList}>
                {todosArray.map((todo, index) => (
                    <li key={index} className={styles.todo}>
                        <div className={styles.info}>
                            <h3> - {todo.title}</h3>
                            <p>{todo.description}</p>
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={() => handleRemoveTodo(todo.id)}>
                                remove
                            </button>
                            <button onClick={() => handleEditTodo(todo.id)}>
                                edit
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default TodoComponent