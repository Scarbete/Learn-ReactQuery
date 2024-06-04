import { Todo, useEditTodoMutation, useRemoveTodoMutation } from '@/features/todo'
import { FC } from 'react'
import styles from './TodoCard.module.scss'


type Props = {
    todo: Todo
}


const TodoCard: FC<Props> = (props) => {
    const removeTodoMutation = useRemoveTodoMutation()
    const editTodoMutation = useEditTodoMutation()

    const { todo } = props

    const handleRemoveTodo = (id?: number | undefined) => {
        if (!id) return
        removeTodoMutation.mutate(id)
    }

    const handleEditTodo = (id?: number | undefined) => {
        if (!id) return

        const title = prompt('Enter new title') || ''
        const description = prompt('Enter new description') || ''

        if (!title.trim() && !description.trim()) return

        const newTodo: Todo = {
            id,
            title,
            description,
            completed: false
        }

        editTodoMutation.mutate({ id, newTodo })
    }

    return (
        <li className={styles.todo}>
            <div className={styles.info}>
                <h3> - {todo.title}</h3>
                <p>{todo.description}</p>
            </div>
            <div className={styles.buttons}>
                <button onClick={() => handleRemoveTodo(todo.id)}>
                    {removeTodoMutation.isPending
                        ? '...loading'
                        : 'remove'
                    }
                </button>
                <button onClick={() => handleEditTodo(todo.id)}>
                    {editTodoMutation.isPending
                        ? '...loading'
                        : 'edit'
                    }
                </button>
            </div>
        </li>
    )
}

export default TodoCard