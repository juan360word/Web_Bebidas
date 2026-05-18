
// Importaciones

import type {InferOutput} from 'valibot' //extrae automáticamente el tipo TypeScript
import { CategoriasApi, DrinkApi, DrinksApi, RecipeAPIResponseSchema, SearchFilter } from '../ValiBot/ValiBotSchema' // Llamamos lo que se creo en Valibot


export type Categorias = InferOutput<typeof CategoriasApi>
export type SearchFilter  = InferOutput<typeof SearchFilter>
export type Drinks  = InferOutput<typeof DrinksApi>
export type Drink  = InferOutput<typeof DrinkApi>
export type Info  = InferOutput<typeof RecipeAPIResponseSchema>

{/* TODO ESTO SE USARA PARA LLAMAR LA INFORMACION DE LA API Y PODER USARLA EN TODOS LOS COMPONENTES
    QUE VAYAMOS A USAR, SIN ESTO NO LO PODEMOS USAR SIMPRE SE USA INTEROUTPUT POR QUE USAMOS VALIBOT NO ZOD    
*/}

