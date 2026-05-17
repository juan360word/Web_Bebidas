
import type { Drink } from "../Types/Types"
import { useAppStore } from "../Stores/StoreZustand"


type DrinkProps = {
    drink: Drink
}

export const DrinkCard = ({drink} : DrinkProps) => {

    const Informacion = useAppStore((item) => item.informacion)

    
  return (
    <>
    <div className=" text-center hover:scale-90 mx-auto shadow-lg">
        <div className="overflow-hidden">
            <img src={drink.strDrinkThumb} alt={`${drink.strDrink}`} />
        </div>
        <div className="p-5">
           <h2 className="text-2xl truncate  font-serif ">
                {drink.strDrink}
            </h2> 
            <button className="mt-5 cursor-pointer w-full p-3 font-serif bg-orange-400 hover:bg-orange-700 
            hover:text-white rounded-lg text-xl"
            
            onClick={() => Informacion(drink.idDrink)}
            >
                Ver Receta
            </button>
        </div>
    
    </div>
    </>
  )
}
