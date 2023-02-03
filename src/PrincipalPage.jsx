import { useEffect, useState } from "react";


export const PrincipalPage = () => {

    const [data, setData] = useState([ 60, 65, 85, 75, 78, 62, 64, 80, 81, 75, 80, 86, 75, 87, 58, 77]);
    const [dataOrdenada, setDataOrdenada] = useState([]);
    const [dataOrdenadaHojas, setDataOrdenadaHojas] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleClick = () => {
      setData([...data, inputValue]);
      setInputValue('');
    };

    const handleClickOrdenarTallos = () => {
        const datos = []
        const longitud = data.length 

        const ordenada =  data.sort((a, b) => a - b);
        setDataOrdenadaHojas( ordenada )
        const uniqueData = [...new Set(ordenada.map(num => Math.floor(num / 10)))];
        const dataNueva = uniqueData.map(num => num * 10)

        //console.log( data )
        //console.log( uniqueData ) 

        // const sortedData = [...data].sort((a, b) => a - b);
        // setData(sortedData);
        dataNueva.forEach((text, index) => {
            parseInt(text)
            const firstDigit = Math.floor(text / 10);
            const listOrdenada = { firstDigit }
            //console.log( 'FIRTS-DIGIT',datos )
            datos.push( listOrdenada )
            setDataOrdenada( datos )
            
            if( index === longitud ) {
                console.log(dataOrdenada);
            }
        });
    }

    const handleClickOrdenarHojas = () => {
        const datos = []
        dataOrdenadaHojas.forEach((text, index) => {
            parseInt(text)
            const secondDigit = Math.floor(text % 10);
            const listOrdenada = { secondDigit }
            console.log( 'Second-DIGIT', listOrdenada )
            datos.push( listOrdenada )
            setDataOrdenadaHojas( datos )
            console.log('QUE MIRA BOBO',dataOrdenadaHojas)
        });
        
    }

    const botonOrdenar = () => {
        handleClickOrdenarTallos()
        handleClickOrdenarHojas()
    }

    const limpiar = () => {
        setData([])
        setDataOrdenada([])
        setDataOrdenadaHojas([])
    }

    // console.log('FUERA', dataOrdenada)
    // console.log('FUERA-DATA', data)
    return (
    <>  
        <div>
            <h6> Erick del Carmen Ventura Madrigal </h6>
            <h6> Ing. Sistemas Computacionales </h6>
            <label htmlFor=""> Agregar un numero </label>
            <input
                type="text"
                className="form-control input-number"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />
            <hr />
            <h3> Con el segundo click en el boton "Ordenar tabla" muestra la lista de las hojas </h3>
            <br />
            <button 
                onClick={handleClick}
                className='btn btn-primary'
            >
                Agregar Numero
            </button>
            &nbsp;
            <button 
                onClick={ botonOrdenar }
                className='btn btn-danger'
            >
                Ordenar tabla
            </button>
            &nbsp;
            <button 
                onClick={ limpiar }
                className="btn btn-success"
            >
                Limpiar lista
            </button>
            <br />

            <div className="row">
                <div className="col">
                    <ul>
                        {data.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))}
                    </ul>  
                </div>
                <div className="col">
                    <h2> Tallos </h2>
                    <ul>
                        {dataOrdenada.map((item, index) => (
                        <li key={index}>{item.firstDigit}</li>
                        ))}
                    </ul>            
                </div>
                <div className="col">
                    <h2> Hojas </h2>
                    <ul>
                        {dataOrdenadaHojas.map((item, index) => (
                        <li key={index}>{item.secondDigit}</li>
                        ))}
                    </ul>            
                </div>
            </div>
        </div>
    </>
  )
}
