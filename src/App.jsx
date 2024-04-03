import React, { useState } from 'react';

import Configuracion from "./components/Configuracion"
import Header from "./components/Header"

function App() {

  //aqui se declara los estados ya que los enviaremos por props a sus componentes para un cambio general
  const [tema, setTema] = useState('claro');
  const [idioma, setIdioma] = useState('español')

  return (
    <div className={`${tema === 'oscuro' ? 'bg-neutral-700' : ''}`}>
      <div className="mx-auto px-12 py-6">
        <Header idioma={idioma}/>
        <div className="mt-10">
          <Configuracion 
            //aqui se envian las props
            tema={tema} 
            setTema={setTema} 
            //ya que traera idioma de configuracion
            idioma={idioma}
            setIdioma={setIdioma}
          />
        </div>
      </div>
    </div>

  )
}

export default App
