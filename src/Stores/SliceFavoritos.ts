
// Importaciones

import type { StateCreator } from 'zustand'
import type { Info } from '../Types/Types'


// Constante que centraliza el nombre de la key en localStorage,
// evitando errores de typo al escribirla en múltiples lugares
const FAVORITES_KEY = 'favoritos'

// Función auxiliar (helper) que encapsula la lógica de persistencia en localStorage
// Recibe el arreglo actualizado y lo serializa a JSON para guardarlo

const saveFavoritos = (favoritos: Info[]) => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoritos))
}

// Tipo que define la forma del slice: estado + acciones

export type FavoriteSlice = {
    favoritos: Info[] // Estado: arreglo de bebidas favoritas
    handleFavoritos: (item: Info) => void // Acción: agrega o quita un favorito
    existefavorito: (id: Info['idDrink']) => boolean // Acción: verifica si un drink ya es favorito
    localfromStorage: () => void // Acción: carga los favoritos desde localStorage
}

// Slice de Zustand que maneja toda la lógica de favoritos
// Recibe set para modificar el estado y get para leer el estado actual

export const createFavoritos: StateCreator<FavoriteSlice> = (set, get) => ({
    favoritos: [],

     // Maneja el toggle de favoritos: si ya existe lo quita, si no existe lo agrega.
    // Se usa una variable intermedia 'next' para calcular el nuevo estado
    // antes de llamar a set() y saveFavoritos(), manteniendo ambos sincronizados

    handleFavoritos: (item) => {
        const { favoritos } = get() 
        const yaExiste = favoritos.some((state) => state.idDrink === item.idDrink)
        const next = yaExiste
            ? favoritos.filter((favorito) => favorito.idDrink !== item.idDrink)
            : [...favoritos, item]

        set({ favoritos: next })
        saveFavoritos(next)
    },
     // Verifica si un drink existe en favoritos usando su idDrink.
    // Retorna true o false para controlar el texto y color del botón en el Modal
    existefavorito: (id) => {
        return get().favoritos.some((state) => state.idDrink === id)
    },
     // Hidrata el estado de Zustand con los favoritos guardados en localStorage al iniciar la app.
    // Usa el operador nullish coalescing (??) para intentar con una key alternativa 'Favoritos'
    // por compatibilidad con versiones anteriores del proyecto.
    // El try/catch maneja el caso de que el JSON esté corrupto, eliminando el dato inválido
    localfromStorage: () => {
        const stored =
            localStorage.getItem(FAVORITES_KEY) ??
            localStorage.getItem('Favoritos')
        if (!stored) return

        try {
            const favoritos = JSON.parse(stored) as Info[]
            set({ favoritos })
        } catch {
            localStorage.removeItem(FAVORITES_KEY) // Elimina el dato corrupto para evitar errores futuros
        }
    },
})
