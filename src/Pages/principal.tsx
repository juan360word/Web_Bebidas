
// Importaciones

import { useMemo } from 'react' // El estado Memo se usa para poder memorizar el resultado
import {useAppStore} from '../Stores/StoreZustand.ts' // Se importo el hook AppStore
import { DrinkCard } from '../Component/DrinkCard.tsx' // Se importo el Componente DrinCard

const Principal = () => { // Se llamara en el Router.tsx como pagina principal

  const Drink = useAppStore((item) => item.drink) // Para llamar la informacion que se usara (Gracias a la API)

   const hasDrink = useMemo(() => Drink.drinks.length,[Drink]) // Recordara la cantidad de los Drinks

  return (
    <>
    <h1 className='text-6xl font-black text-center tracking-wider py-4 '>Recetas</h1> {/* Titulo */}

    {hasDrink ? ( // Se hace el ternario para que pueda renderizar y para que aparezca el resultado dependiendo de la accion
      <>
      <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 m-5 gap-5 '>
      
          {Drink.drinks.map((item) => (
          <DrinkCard
            key={item.idDrink}
            drink={item}
            />
          ))}
      
      </div>
          {/* Bien la Parte de arriba es la renderizaciond de las cartas donde aparece la informacion que nos da el ,
            En donde llamaremos a Drink que fue la info que llamamos y se le pedira que muestre los datos precicos con 
            MAP , llamaremos key para el identificador unico y el Drink es el prot que se le puso  DrinkCard.tsx
          */}
      </>) : 
      (<p className='my-10  text-center text-2xl'>

        No hay Resultados  {/* Mostrara el un mensaje cuando no apareza ningun llamado aun de la API */}

      </p>) }   
    </>
    
  )
}

export default Principal