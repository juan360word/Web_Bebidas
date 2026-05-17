
import {create} from 'zustand'
import { createList, type sliceType } from './SlicePatern'
import {createFavoritos} from './SliceFavoritos'
import type  {FavoriteSlice} from './SliceFavoritos'
import type  {Notislice} from './SliceNoti'
import {createNoti} from './SliceNoti'

export const useAppStore = create<sliceType & FavoriteSlice & Notislice  >((...A) => ({
    ...createList(...A),
    ...createFavoritos(...A),
    ...createNoti(...A)
}))




