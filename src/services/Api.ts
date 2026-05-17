
import axios from "axios";
import { CategoriasApi, RecipeAPIResponseSchema } from "../ValiBot/ValiBotSchema";
import { safeParse } from "valibot";
import type { Drink, SearchFilter } from "../Types/Types";
import { DrinksApi } from "../ValiBot/ValiBotSchema";




export async function getApi() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data} = await axios(url)
    const resultado = safeParse(CategoriasApi,data)
    console.log(resultado)
    if(resultado.success){
        return resultado.output // datos validos
    }else {
        console.error(resultado.issues) // ❌ errores de validación
      }
}

export async function getRecipes(filtros:SearchFilter) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filtros.categoria}&i${filtros.ingrediente}`
    const {data} = await axios(url)
    const Resultado = safeParse(DrinksApi,data)
    if(Resultado.success){
        return Resultado.output // datos validos
    }else {
        console.error(Resultado.issues) // ❌ errores de validación
      }
}

export async function getInformacion(id: Drink['idDrink']) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data } = await axios(url)
    const drink = data.drinks?.[0]
    if (!drink) return

    const Resultado = safeParse(RecipeAPIResponseSchema, drink)
    if (Resultado.success) {
        return Resultado.output
    }
    console.error(Resultado.issues)
}

