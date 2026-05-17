import type {StateCreator} from 'zustand'
import type { Info} from '../Types/Types'


export type FavoriteSlice = {
    favoritos: Info[]
    handleFavoritos: (item:Info) => void
    existefavorito : (id: Info['idDrink']) => boolean
    localfromStorage : () => void
}

export const createFavoritos : StateCreator<FavoriteSlice> = (set,get,api) => ({
    favoritos: [],
    handleFavoritos: (item) => {

        if(get().favoritos.some(state => state.idDrink === item.idDrink)){
            set((state) => ({
                favoritos: state.favoritos.filter(favorito => favorito.idDrink !== item.idDrink)
            }))
        }else{
            set((state)=>({
                favoritos:[...state.favoritos,item]
            }))
        }
        localStorage.setItem('favoritos', JSON.stringify(get().favoritos))
    },
    existefavorito: (id) => {
        return (get().favoritos.some(state => state.idDrink === id))
    },
    localfromStorage : () => {
        const storeFa = localStorage.getItem('Favoritos')
        if(storeFa){
            set({
                favoritos:JSON.parse(storeFa)
            })
        }
    }
        
    
})