import { Todo, TodoCard, useTodoModel, useTodosQuery } from '@/features/todo'
import styles from './TodosList.module.scss'


const TodosList = () => {
    const { limit, page } = useTodoModel()
    const todosQuery = useTodosQuery(limit, page)

    const todosArray: Todo[] = Array.isArray(todosQuery.data) ? todosQuery.data : []

    if (todosQuery.isLoading) return (
        <p className={styles.todosStatus}>
            ...loading
        </p>
    )

    if (todosQuery.isError) return (
        <p className={styles.todosStatus}>
            {todosQuery.error.message}
        </p>
    )

    return (
        todosArray.length > 0 ? (
            <ul className={styles.todoList}>
                {todosArray.map((todo, index) => (
                    <TodoCard
                        key={index}
                        todo={todo}
                    />
                ))}
            </ul>
        ) : (
            <div className={styles.todosStatus}>
                <h3>Todos is null</h3>
            </div>
        )
    )
}

export default TodosList