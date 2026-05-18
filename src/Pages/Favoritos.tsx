
// Importaciones

import { DrinkCard } from "../Component/DrinkCard" // Componente de DrinkCard
import { useAppStore } from "../Stores/StoreZustand" // Hook
import {  useMemo } from "react" // estado de memorizacion



const Favoritos = () => { // componente

  // Llamado de informacion de las api
  const Favorito = useAppStore((item) => item.favoritos)
  const FavoritosMensaje = useMemo(() => Favorito.length ,[Favorito])
  

  return (
    
    <>

    <h1 className="text-5xl p-10 mx-auto w-auto text-center tracking-wider font-extrabold ">Bebidas Favoritas</h1> {/* Titulo */}
    
    {FavoritosMensaje ? (
         <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 m-5 gap-5 ">
            {Favorito.map((item) => (
              <DrinkCard
                key={item.idDrink}
                drink={item} // se pone Drink por el prot
              />
              ))}
              {/* ACA SE LLAMARA A LAS CARTAS QUE FUERON DADAS DE FAVORITA */}
        </div>
        
    ): (
      <p className="text-3xl mx-auto text-center ">
        Usted no tiene bebidas favoritas aun...
      </p>
    )} {/*  POR SI NO SE AGREGADO NINGUNA BEBIDA */}
      

    </>
  )
}

{/* ESTA ES LA PAGINA DE FAVORITOS ESTO SE REALIZO AL FINAL  */}

export default Favoritos