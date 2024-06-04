import { FC, HTMLAttributes, HTMLInputTypeAttribute } from 'react'
import { TodoFormKeysEnum, TodoFormState, todoFormValidate } from '@/features/todo'
import { UseFormRegister } from 'react-hook-form'
import styles from './TodoFormField.module.scss'


type States = {
    // custom attributes
    error: string | undefined
    name: TodoFormKeysEnum
    register: UseFormRegister<TodoFormState>

    // default input attributes
    type?: HTMLInputTypeAttribute | undefined
    placeholder?: string | undefined
} & HTMLAttributes<HTMLInputElement>


const TodoFormField: FC<States> = (props) => {

    const {
        register,
        error,
        name,
        type = 'text',
        placeholder,
        ...otherProps
    } = props

    return (
        <label className={styles.label}>
            {error && <span>{error}</span>}
            <input
                {...register(name, todoFormValidate[name])}
                {...otherProps}
                type={type}
                name={name}
                placeholder={placeholder}
            />
        </label>
    )
}

export default TodoFormField