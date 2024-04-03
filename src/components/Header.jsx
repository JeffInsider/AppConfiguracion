import React from 'react'
import traducciones from '../settings/idioma'

const Header = ({ idioma }) => {
  //si no se encuentra el idioma lo pondra a español
  const t = traducciones[idioma] || traducciones['español']

  //Se eliminaConfiguracion de la aplicacion para poner t.titulo
  return (
    <div className='bg-indigo-500 text-white py-6 rounded-md'>
        <h1 className='font-bold text-center text-xl'>
            {t.titulo}
        </h1>
    </div>
  )
}

export default Header