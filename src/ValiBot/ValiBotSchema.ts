
import {array, object,string,nullish} from 'valibot'



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