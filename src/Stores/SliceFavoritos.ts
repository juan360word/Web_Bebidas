import type { StateCreator } from 'zustand'
import type { Info } from '../Types/Types'

const FAVORITES_KEY = 'favoritos'

const saveFavoritos = (favoritos: Info[]) => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoritos))
}

export type FavoriteSlice = {
    favoritos: Info[]
    handleFavoritos: (item: Info) => void
    existefavorito: (id: Info['idDrink']) => boolean
    localfromStorage: () => void
}

export const createFavoritos: StateCreator<FavoriteSlice> = (set, get) => ({
    favoritos: [],
    handleFavoritos: (item) => {
        const { favoritos } = get()
        const yaExiste = favoritos.some((state) => state.idDrink === item.idDrink)
        const next = yaExiste
            ? favoritos.filter((favorito) => favorito.idDrink !== item.idDrink)
            : [...favoritos, item]

        set({ favoritos: next })
        saveFavoritos(next)
    },
    existefavorito: (id) => {
        return get().favoritos.some((state) => state.idDrink === id)
    },
    localfromStorage: () => {
        const stored =
            localStorage.getItem(FAVORITES_KEY) ??
            localStorage.getItem('Favoritos')
        if (!stored) return

        try {
            const favoritos = JSON.parse(stored) as Info[]
            set({ favoritos })
        } catch {
            localStorage.removeItem(FAVORITES_KEY)
        }
    },
})
