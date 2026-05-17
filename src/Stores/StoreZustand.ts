
import {create} from 'zustand'
import { createList, type sliceType } from './SlicePatern'
import {createFavoritos} from './SliceFavoritos'
import type  {FavoriteSlice} from './SliceFavoritos'

export const useAppStore = create<sliceType & FavoriteSlice >((...A) => ({
    ...createList(...A),
    ...createFavoritos(...A)
}))




