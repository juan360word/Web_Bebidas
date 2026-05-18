import type { StateCreator } from 'zustand'
import ServiceIA from '../services/ServiceIA'
import { notificarError } from '../Component/Notificacion'

export type SliceAI = {
    IA: string
    generarIA: (prompt: string) => Promise<void>
    genera: boolean
}

export const createIA: StateCreator<SliceAI> = (set) => ({
    IA: '',
    genera: false,
    generarIA: async (prompt) => {
        set({ IA: '', genera: true })

        try {
            const stream = await ServiceIA.generarIA(prompt)

            for await (const textPart of stream) {
                set((state) => ({
                    IA: state.IA + textPart,
                }))
            }
        } catch (error) {
            console.error(error)
            const mensaje =
                error instanceof Error ? error.message : 'No se pudo generar la receta con IA'
            notificarError(mensaje)
        } finally {
            set({ genera: false })
        }
    },
})
