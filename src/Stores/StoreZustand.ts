

// importaciones

import {create} from 'zustand' // PARA USAR ZUSTAND
import { createList, type sliceType } from './SlicePatern' // LLAMO AL EL TYPE Y EL CREATE QUE SE USO EN SLCEPATERN.TSX
import {createFavoritos} from './SliceFavoritos'
import type  {FavoriteSlice} from './SliceFavoritos' //NOTIFICACION
import type  {Notislice} from './SliceNoti' //NOTIFICACION
import {createNoti} from './SliceNoti' 
import { createIA } from './SliceIA'
import type {SliceAI} from './SliceIA'


    {/*  Store principal de Zustand que combina múltiples slices en un solo store global
        Cada slice maneja una responsabilidad específica de la aplicación (Slice Pattern)
        El tipo del store se define como la intersección (&) de los tres slices,
        lo que le indica a TypeScript que el store contiene TODAS las propiedades de los tres tipos
    */}

    {/*
        ESTE UseAppStore SE USARA MUCHO YA QUE ES LA BASE PARA
        MOSTRAR LOS DATOS SIEMPRE PONER LOS CREATELIST
         */}

export const useAppStore = create<sliceType & FavoriteSlice & Notislice & SliceAI  >((...A) => ({
    ...createList(...A),
    ...createFavoritos(...A),
    ...createNoti(...A),
    ...createIA(...A)
}))




