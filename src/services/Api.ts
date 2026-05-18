
//Importaciones 
// LLAMADO DE APIS (LOS LINKS SE AGARRARON DE LA WEB DE LA API GRATIS)
// SE USO VALIBOT

import axios from "axios"; // Para Apis
import { CategoriasApi, RecipeAPIResponseSchema } from "../ValiBot/ValiBotSchema"; // VALIBOT
import { safeParse } from "valibot"; // VALIBOT
import type { Drink, SearchFilter } from "../Types/Types";
import { DrinksApi } from "../ValiBot/ValiBotSchema"; // VALIBOT


// getApi()          → carga categorías al montar la app
// getRecipes()      → busca bebidas cuando el usuario usa el formulario
// getInformacion()  → carga el detalle cuando el usuario abre el modal


// Obtiene el listado de categorías para el select del formulario
export async function getApi() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data} = await axios(url) // Petición HTTP GET, desestructura solo data de la respuesta
    const resultado = safeParse(CategoriasApi,data) // Valida que los datos coincidan con el esquema
    console.log(resultado)
    if(resultado.success){
        return resultado.output // datos validos
    }else {
        console.error(resultado.issues) // ❌ errores de validación
      }
}
// Busca bebidas filtrando por categoría e ingrediente según los filtros del formulario
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
// Obtiene la información detallada de una bebida específica cuando el usuario abre el modal
export async function getInformacion(id: Drink['idDrink']) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data } = await axios(url)
    const drink = data.drinks?.[0]
    if (!drink) return

    const Resultado = safeParse(RecipeAPIResponseSchema, drink)
    if (Resultado.success) {
        return Resultado.output // datos validos
    } 
    console.error(Resultado.issues) // ❌ errores de validación
}

