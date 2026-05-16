
import {array, object,string} from 'valibot'
import type {InferOutput} from 'valibot'


export const CategoriasApi = object({
    drinks: array(object({strCategory: string()}))
})
export const SearchFilter = object({
    ingrediente: string(),
    categoria: string()
})

export const DrinkApi = object({
    idDrink: string(),
    strDrink: string(),
    strDrinkThumb: string()

})

export const DrinksApi = object({
    drinks: array(DrinkApi)
})
