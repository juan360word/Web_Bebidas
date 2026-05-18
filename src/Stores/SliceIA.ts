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
            let mensaje = 'No se pudo generar la receta con IA'

            if (error instanceof Error) {
                mensaje = error.message

                if (mensaje.includes('401') || mensaje.toLowerCase().includes('user not found')) {
                    mensaje =
                        'API key inválida. Revisa VITE_OPENROUTER_API_KEY en tu archivo .env y genera una nueva en openrouter.ai/keys'
                } else if (mensaje.includes('Falta VITE_OPENROUTER_API_KEY')) {
                    mensaje =
                        'Falta la API key. Copia .env.example a .env y pega tu clave de OpenRouter.'
                }
            }

            notificarError(mensaje)
        } finally {
            set({ genera: false })
        }
    },
})
