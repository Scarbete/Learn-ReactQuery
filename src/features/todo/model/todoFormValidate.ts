import { TodoFormKeysEnum, TodoFormValidation } from '@/features/todo'


export const todoFormValidate: TodoFormValidation = {
    [TodoFormKeysEnum.TITLE]: {
        required: 'Field is required',
        pattern: {
            value: /\w{3,60}/,
            message: '3 - 60 symbols'
        }
    },
    [TodoFormKeysEnum.DESCRIPTION]: {
        required: 'Field is required',
        pattern: {
            value: /\w{3,60}/,
            message: '3 - 60 symbols'
        }
    }
}