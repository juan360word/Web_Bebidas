import type {InferOutput} from 'valibot'
import { CategoriasApi, DrinkApi, DrinksApi, RecipeAPIResponseSchema, SearchFilter } from '../ValiBot/ValiBotSchema'


export type Categorias = InferOutput<typeof CategoriasApi>
export type SearchFilter  = InferOutput<typeof SearchFilter>
export type Drinks  = InferOutput<typeof DrinksApi>
export type Drink  = InferOutput<typeof DrinkApi>
export type Info  = InferOutput<typeof RecipeAPIResponseSchema>

