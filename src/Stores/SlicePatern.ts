
import type {StateCreator} from 'zustand'
import { getApi, getInformacion } from '../services/Api'
import type { Categorias, Drink, Drinks, Info, SearchFilter } from '../Types/Types'
import { getRecipes } from '../services/Api'


export type sliceType = {
    categorias: Categorias
    drink : Drinks
    fetchApiCategorias: () => Promise<void>
    searchCosas: (searchCosas: SearchFilter) => Promise<void>
    informacion: (id: Drink['idDrink']) => Promise<void>
    info: Info
    Modal: boolean
    openModal: () => void
    closeModal: () => void
}

export const createList : StateCreator<sliceType> = (set) => ({
    categorias: {
        drinks: [] // se realiza por que drinks lo pide o por que es un objeto
    },
    drink : {
        drinks:[]
    },
    fetchApiCategorias: async () => {
        const categorias = await getApi()
        if (categorias) {
            set({ categorias })
        }
    },
    searchCosas: async (filtros) => {
        const drink = await getRecipes(filtros)
        set({drink})
    },
    Modal:false,
    informacion: async (item) => {
        const Informacion = await getInformacion(item)
        if (Informacion) {
            set({ info: Informacion, Modal: true })
        }
    },
    info: {} as Info,
    openModal: () => set({ Modal: true }),
    closeModal: () => set({ Modal: false })
    
})