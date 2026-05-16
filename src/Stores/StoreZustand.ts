
import {create} from 'zustand'
import { createList, type sliceType } from './SlicePatern'


export const useAppStore = create<sliceType>((...A) => ({
    ...createList(...A)
}))




