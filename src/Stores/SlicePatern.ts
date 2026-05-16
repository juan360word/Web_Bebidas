
import type {StateCreator} from 'zustand'
import { getApi } from '../services/Api'
import type { Categorias, Drinks, SearchFilter } from '../Types/Types'
import { getRecipes } from '../services/Api'


export type sliceType = {
    categorias: Categorias
    drink : Drinks
    fetchApiCategorias: () => Promise<void>
    searchCosas: (searchCosas: SearchFilter) => Promise<void>
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
    }
    
})