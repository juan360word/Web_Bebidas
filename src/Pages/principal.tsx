
import { useMemo } from 'react'
import {useAppStore} from '../Stores/StoreZustand.ts'
import { DrinkCard } from '../Component/DrinkCard.tsx'

const Principal = () => {

  const Drink = useAppStore((item) => item.drink)

   const hasDrink = useMemo(() => Drink.drinks.length,[Drink])

  return (
    <>
    <h1 className='text-6xl font-black tracking-wider py-4 '>Recetas</h1>

    {hasDrink ? (
      <>
      <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 m-5 gap-5 '>
          {Drink.drinks.map((item) => (
          <DrinkCard
            key={item.idDrink}
            drink={item}
            />
          ))}
      </div>
      </>) : 
      (<p className='my-10  text-center text-2xl'>

        No hay Resultados

      </p>) }   
    </>
    
  )
}

export default Principal