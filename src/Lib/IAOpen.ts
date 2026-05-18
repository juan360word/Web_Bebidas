import { createOpenRouter } from '@openrouter/ai-sdk-provider'
import { streamText } from 'ai'

function getApiOpen() {
    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY?.trim()

    if (!apiKey) {
        throw new Error(
            'Falta VITE_OPENROUTER_API_KEY. Agrégala en el archivo .env de la raíz del proyecto.'
        )
    }

    return createOpenRouter({ apiKey })
}

export default {
    async generarIA(prompt: string) {
        const ApiOpen = getApiOpen()

        const result = streamText({
            model: ApiOpen('google/gemini-2.0-flash-lite-preview-02-05:free'),
            system:
                'Eres un bartender experto. Genera recetas de bebidas claras, en español, con ingredientes y pasos.',
            prompt,
        })

        return result.textStream
    },
}
