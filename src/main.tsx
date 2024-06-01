import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.tsx'
import './assets/styles/bundle.scss'

const root = document.getElementById('root')!

const queryClient = new QueryClient()

createRoot(root).render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
)
