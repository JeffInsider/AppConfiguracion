import React, { useEffect, useState } from 'react'
import traducciones from '../settings/idioma';
import '../styles.css';

//pasamos la props de App para modificarlas y utulizarlas
const Configuracion = ({tema, setTema, idioma, setIdioma}) => {
    //const [idioma, setIdioma] = useState('español');
    //const [tema, setTema] = useState('');
    const [tamFuente, setTamFuente] = useState('pequeña');
    //tiene que ir en false por un error
    const [modoLec, setModoLec] = useState(false);

    //funciones para cambiar las configuraciones
    const handleCambioIdioma = (e) => {
        //setIdioma(e.target.value)
        const nuevoIdioma = e.target.value;
        setIdioma(nuevoIdioma); //esto cambia el idioma depende de lo que selecciono el usuario
        //console.log('Idioma seleccionado:', e.target.value);
    }

    const handleCambioTema = (e) => {
        setTema(e.target.value);
        
        //console.log('Tema seleccionado:', e.target.value);
    }

    const handleCambioFuente = (e) => {
        setTamFuente(e.target.value);
        //console.log('Fuente seleccionada:', e.target.value);
    }

    const handleCambioModLectura = () => {
        setModoLec(!modoLec);
        //console.log('Modo seleccionado:', !modoLec);
    }

    //funcion para guardar en el local storage
    const handleGuardarCambios = () => {
        const config = { idioma, tema, tamFuente, modoLec };
        localStorage.setItem('configuracion', JSON.stringify(config));
        alert('Cambios guardados con exito')
    }

    //funcion para hacer el camnio
    const t = traducciones[idioma] || {};

    //funcion para cargar datos del localstorage
    useEffect(() => {
        //Obtiene el valor almacenado en el local storage con la clave 'configuracion'
        const cargaConfig = localStorage.getItem('configuracion');

        //verificar si si hay datos almacenados
        if (cargaConfig) {
            // Parsea los datos almacenados en JSON y actualiza los estados correspondientes
            const config = JSON.parse(cargaConfig);
            setIdioma(config.idioma);
            setTema(config.tema);
            setTamFuente(config.tamFuente);
            setModoLec(config.modoLec);
        }//else{
        // console.log('No hay informacion')
        //}
    }, []); // La dependencia vacía [] significa que este efecto se ejecuta solo una vez al montar el componente

    return (
        <div className={`p-6 shadow-md rounded-lg  
            ${tema === 'oscuro' ? 'dark-theme' : ''} 
            ${tamFuente === 'grande' ? 'transform scale-105' : ''}
            ${modoLec ? 'modo-lectura' : ''}`} >
            <h2 className='text-xl font-semibold mb-4'>
                {t.prefe}
            </h2>

            <div className="mb-6">
                <div className="bg-gray-50 border rounded-lg p-4 shadow-md">
                    <h3 className="text-lg font-semibold mb-2">{t.idioma}</h3>
                    <p className={`text-sm ${tema === 'oscuro' ? 'text-white' : 'text-gray-600'}`}>{t.seleccionaIdioma}</p>
                    <div className="flex items-center ml-3 mt-2">
                        <input
                            type="radio"
                            name="idioma"
                            value="español"
                            className="mr-3 h-5 w-5 form-radio rounded-full "
                            checked={idioma === 'español'}
                            onChange={handleCambioIdioma}
                        />
                        <label htmlFor="idioma-es" className={`text-sm ${tema === 'oscuro' ? 'text-white' : 'text-gray-700'}`}>{t.español}</label>
                    </div>
                    <div className="flex items-center ml-3 mt-2">
                        <input
                            type="radio"
                            name="idioma"
                            value="ingles"
                            className="mr-3 h-5 w-5 form-radio rounded-full"
                            checked={idioma === 'ingles'}
                            onChange={handleCambioIdioma}
                        />
                        <label htmlFor="idioma-en" className={`text-sm ${tema === 'oscuro' ? 'text-white' : 'text-gray-700'}`}>{t.ingles}</label>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <div className="bg-gray-50 border rounded-lg p-4 shadow-md">
                    <h3 className="text-lg font-semibold mb-2">{t.tema}</h3>
                    <p className={`text-sm ${tema === 'oscuro' ? 'text-white' : 'text-gray-600'}`}>{t.seleccionaTema}</p>
                    <div className="flex items-center ml-3 mt-2">
                        <input
                            type="radio"
                            name="tema"
                            value="claro"
                            className="mr-3 h-5 w-5 form-radio rounded-full "
                            checked={tema === "claro"}
                            onChange={handleCambioTema}
                        />
                        <label htmlFor="tema-claro" className={`text-sm ${tema === 'oscuro' ? 'text-white' : 'text-gray-700'}`}>{t.claro}</label>
                    </div>
                    <div className="flex items-center ml-3 mt-2">
                        <input
                            type="radio"
                            name="tema"
                            value="oscuro"
                            className="mr-3 h-5 w-5 form-radio rounded-full"
                            checked={tema === "oscuro"}
                            onChange={handleCambioTema}
                        />
                        <label htmlFor="tema-oscuro" className={`text-sm ${tema === 'oscuro' ? 'text-white' : 'text-gray-700'}`}>{t.oscuro}</label>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <div className="bg-gray-50 border rounded-lg p-4 shadow-md">
                    <h3 className="text-lg font-semibold mb-2">{t.tamañoFuente}</h3>
                    <p className={`text-sm ${tema === 'oscuro' ? 'text-white' : 'text-gray-600'}`}>{t.seleccionaFuente}</p>
                    <div className="flex items-center ml-3 mt-2">
                        <input
                            type="radio"
                            name="fuente"
                            value="pequeña"
                            className="mr-3 h-5 w-5 form-radio rounded-full"
                            checked={tamFuente === 'pequeña'}
                            onChange={handleCambioFuente}
                        />
                        <label htmlFor="fuente-pequena" className={`text-sm ${tema === 'oscuro' ? 'text-white' : 'text-gray-700'}`}>{t.pequeña}</label>
                    </div>
                    <div className="flex items-center ml-3 mt-2">
                        <input
                            type="radio"
                            id="fuente-grande"
                            name="fuente"
                            value="grande"
                            className="mr-3 h-5 w-5 form-radio rounded-full"
                            checked={tamFuente === 'grande'}
                            onChange={handleCambioFuente} />
                        <label htmlFor="fuente-grande" className={`text-sm ${tema === 'oscuro' ? 'text-white' : 'text-gray-700'}`}>{t.grande}</label>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <div className="bg-gray-50 border rounded-lg p-4 shadow-md">
                    <h3 className="text-lg font-semibold mb-2">{t.modoLectura}</h3>
                    <p className={`text-sm ${tema === 'oscuro' ? 'text-white' : 'text-gray-600'}`}>{t.modoLecturaActivo}</p>
                    <div className="flex items-center ml-3 mt-2">
                        <input
                            type="checkbox"
                            id="modo-lectura"
                            name="modo-lectura"
                            className="mr-3 h-5 w-5 form-checkbox rounded-full"
                            checked={modoLec}
                            onChange={handleCambioModLectura}
                        />
                        <label htmlFor="modo-lectura" className={`text-sm ${tema === 'oscuro' ? 'text-white' : 'text-gray-700'}`}>{t.modoLectura}</label>
                    </div>
                </div>
            </div>

            <button
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleGuardarCambios}
            >
                {t.guardarCambios}
            </button>
        </div>
    )
}

export default Configuracion