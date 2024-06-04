import { create } from 'zustand'


type modelState = {
    limit: number
    page: number
}


export const useTodoModel = create<modelState>(() => ({
    limit: 5,
    page: 1,
}))