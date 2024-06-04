import { FC, HTMLAttributes, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { Todo } from '@/features/todo'
import classnames from 'classnames'

export type TVariantsButton = 'default' | 'orange' | 'secondary' | 'orange_secondary'

type ButtonProps = {
    variant?: TVariantsButton
} & HTMLAttributes<HTMLButtonElement>


const TestComponent = () => {
    const queryClient = useQueryClient()
    const data = queryClient.getQueryData<Todo[]>(['todos']) ?? []

    console.log('data', data)

    const ChildComponent = () => {
        const [state, setState] = useState(0)

        const CustomButton: FC<ButtonProps> = (props) => {

            const {
                variant = 'default',
                children,
                ...otherProps
            } = props

            return (
                <button {...otherProps} className={classnames('customButton', variant)}>
                    {children}
                </button>
            )
        }

        return (
            <div className={'counter'}>
                <CustomButton onClick={() => setState(prev => prev + 1)}>plus</CustomButton>
                <p>{state}</p>
                <CustomButton onClick={() => setState(prev => prev + 1)}>plus</CustomButton>
            </div>
        )
    }

    return (
        <div className={'testFC'}>
            <ChildComponent/>
            <ChildComponent/>
            <ChildComponent/>
        </div>
    )
}

export default TestComponent