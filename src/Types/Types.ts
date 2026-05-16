import type {InferOutput} from 'valibot'
import { CategoriasApi, DrinksApi, SearchFilter } from '../ValiBot/ValiBotSchema'


export type Categorias = InferOutput<typeof CategoriasApi>
export type SearchFilter  = InferOutput<typeof SearchFilter>
export type Drinks  = InferOutput<typeof DrinksApi>

