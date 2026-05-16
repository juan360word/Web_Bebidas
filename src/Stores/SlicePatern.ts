
import type {StateCreator} from 'zustand'
import { getApi } from '../services/Api'


type Categorias ={

}


export type sliceType = {
    categorias: Categorias[]
    fetchApiCategorias: () => Promise<void>
}

export const createList : StateCreator<sliceType> = () => ({
    categorias: [],
    fetchApiCategorias: async() => {
        getApi()
    }
})