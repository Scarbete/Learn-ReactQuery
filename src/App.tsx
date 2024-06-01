import { type FC } from 'react'
import { TodoComponent } from '@/components/todo'
import TestComponent from '@/components/testComponent'

const App: FC = () => {
    return (
        <main>
            <TodoComponent/>
            <TestComponent/>
        </main>
    )
}

export default App