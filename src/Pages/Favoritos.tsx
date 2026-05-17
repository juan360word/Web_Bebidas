
import { DrinkCard } from "../Component/DrinkCard"
import { useAppStore } from "../Stores/StoreZustand"
import {  useMemo } from "react"



const Favoritos = () => {

  const Favorito = useAppStore((item) => item.favoritos)
  const FavoritosMensaje = useMemo(() => Favorito.length ,[Favorito])

  return (
    
    <>

    <h1 className="text-5xl p-10 mx-auto w-auto text-center tracking-wider font-extrabold ">Bebidas Favoritas</h1>
    
    {FavoritosMensaje ? (
         <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 m-5 gap-5 ">
            {Favorito.map((item) => (
              <DrinkCard
                key={item.idDrink}
                drink={item}
              />
              ))}
        </div>
    ): (
      <p className="text-3xl mx-auto text-center ">
        Usted no tiene bebidas favoritas aun...
      </p>
    )}
      

    </>
  )
}

export default Favoritos