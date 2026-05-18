
import { useAppStore } from "../Stores/StoreZustand"
import {notificarError} from '../Component/Notificacion.tsx'




export default function GenerateAI() {
  
    const generarIA = useAppStore((item) => item.generarIA)
    const IA = useAppStore((item) => item.IA)
    const genera = useAppStore((item) => item.genera)

    const handelSumit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const prompt = form.get('prompt') as string

        if(prompt.trim() === ''){
            notificarError('Esta vacio...')
            return
        }
        await generarIA(prompt)
    }
  
    return (
      <>
        <h1 className="text-6xl text-center mx-auto tracking-wider font-extrabold">Genera una receta con IA</h1>
  
        <div className="max-w-4xl mx-auto">
          <form  
            onSubmit={handelSumit}
            className='flex flex-col space-y-3 py-10'
          >
            <div className="relative">
              <input 
                name="prompt" 
                id="prompt" 
                className="border bg-white p-4 mx-auto  rounded-lg w-full border-slate-800" 
                placeholder="Genera una receta con ingredientes. Ej. Bebida con Tequila y Fresa"
              />
              <button 
                type="submit" 
                aria-label="Enviar"
                className={`cursor-pointer absolute top-1/2 right-5 transform -translate-x-1/2 -translate-y-1/2 
                    ${genera ? 'cursor-not-allowed opacity-50' : ''}`} disabled={genera}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </button>
            </div>
          </form>
        {genera && <p>Espera me estoy generando... 'Perdon la demora'</p> }
          <div className="py-10 text-center whitespace-pre-wrap">
            {IA}
          </div>
        </div>
  
      </> 
    )
  }