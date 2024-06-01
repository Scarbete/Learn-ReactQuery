import { create } from 'zustand'


type States = {
    limit: number
    page: number
}

type Actions = {

}


export const useTodoModel = create<States & Actions>(() => ({
    limit: 10,
    page: 1
}))