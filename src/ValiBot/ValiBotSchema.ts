
// Importaciones
// Use Valibot por que ees muy bueno para los datos de las APIS

import {array, object,string,nullish} from 'valibot' // validamos lo que usaremos




export const CategoriasApi = object({
    drinks: array(object({strCategory: string()}))
}) // crearemos Drinks la cual se usara para los nombres

export const SearchFilter = object({
    ingrediente: string(),
    categoria: string()
}) // se creo esto para poder filtrar lo que usaremos 

export const DrinkApi = object({
    idDrink: string(),
    strDrink: string(),
    strDrinkThumb: string()

}) // espesificamos LOS DATOS QUE USAREMOS GRACIAS A LA API (LOS NOMBRES SE SACO DE LA API)

export const DrinksApi = object({
    drinks: array(DrinkApi)
})

export const RecipeAPIResponseSchema = object({
    idDrink: string(),
    strDrink: string(),
    strDrinkThumb: string(),
    strInstructions: string(),
    strIngredient1: nullish(string()),
    strIngredient2: nullish(string()),
    strIngredient3: nullish(string()),
    strIngredient4: nullish(string()),
    strIngredient5: nullish(string()),
    strIngredient6: nullish(string()),
    strIngredient7: nullish(string()),
    strIngredient8: nullish(string()),
    strIngredient9: nullish(string()),
    strMeasure1: nullish(string()),
    strMeasure2: nullish(string()),
    strMeasure3: nullish(string()),
    strMeasure4: nullish(string()),
    strMeasure5: nullish(string()),
    strMeasure6: nullish(string()),
  });

  // ESTE ES PARA LOS INGREDIENTES QUE TIENEN LAS BEBIDAS