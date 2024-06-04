import { create } from 'zustand'

type States = {
    limit: number
    page: number
}

type Actions = {}


export const useTodoModel = create<States & Actions>(() => ({
    limit: 5,
    page: 1,
}))