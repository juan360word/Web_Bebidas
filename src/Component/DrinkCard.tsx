
// Importaciones

import type { Drink } from "../Types/Types" // Se llamo a los types (este tiene Datos de la API)
import { useAppStore } from "../Stores/StoreZustand" // Se llamo a hook de AppStore


type DrinkProps = {
    drink: Drink
} // se crea un type donde llamaremos a Drink el cual tiene los datos

export const DrinkCard = ({drink} : DrinkProps) => { // Componente  y se pone como prop drink el cual se usara para llamar los datos

    const Informacion = useAppStore((item) => item.informacion) // Esto llamara a la informacion(Recetas) de la api la cual se pondra abajo

    {/* ESTE COMPONENTE ES LA CARTA EN GENERAL */}

  return (
    <>
    <div className=" text-center hover:scale-90 mx-auto shadow-lg">
        <div className="overflow-hidden">
            <img src={drink.strDrinkThumb} alt={`${drink.strDrink}`} /> {/* Aca va la imagen de la API y se llamara al prop y este llamara a
                                                                        strDrinkThumb el cual este tendra la imagen en types
                                                                        */}
        </div>
        <div className="p-5">
           <h2 className="text-2xl truncate  font-serif ">
                {drink.strDrink} {/* Este llamara a la Nombre de las bebidas */}
            </h2> 
            <button className="mt-5 cursor-pointer w-full p-3 font-serif bg-orange-400 hover:bg-orange-700 
            hover:text-white rounded-lg text-xl"
            
            onClick={() => Informacion(drink.idDrink)} 
            >
                Ver Receta {/* Este nos ayudara a ver el MODAL, ya que se llamo a informacion + Drink   */}
            </button>
        </div>
    
    </div>
    </>
  )
}
