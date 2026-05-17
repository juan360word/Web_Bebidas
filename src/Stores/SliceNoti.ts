
import type { StateCreator } from "zustand";

type Notificacion = {
    text: string,
    error: boolean,
    show:boolean
}

export type Notislice = {
    noti: Notificacion
}

export const createNoti : StateCreator<Notislice> = () => ({
    noti: {
        text:'',
        error:false,
        show: false
    }
})



