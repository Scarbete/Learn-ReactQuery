import { type FC } from 'react'
import { TodoComponent } from '@/features/todo'
// import TestComponent from '@/features/testComponent'

const App: FC = () => {
    return (
        <main>
            <TodoComponent/>
            {/*<TestComponent/>*/}
        </main>
    )
}

export default App