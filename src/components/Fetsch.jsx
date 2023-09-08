import React, { useEffect, useState } from 'react'
import '../stylesheet/fetsch.css'

const Fetsch = () => {
    const [nombre, setNombre] = useState("")
    const [imagen, setImagen] = useState("")
    useEffect(() => {
        //here we do peticion asincrona
        const url = "https://randomuser.me/api/"
        const peticion = fetch(url);

        peticion
            .then(datos => datos.json())
            .then(lectura => {
                setNombre(`${lectura.results[0].name.first} ${lectura.results[0].name.last}`)
                setImagen(`${lectura.results[0].picture.large}`)
            })
            .catch(() => console.log("error Diego"))
    }, [])



    return (
        <>
            <div className='fetsch-header'>
                <h2>Random People</h2>
                {nombre}
                <div className='imgsection'>
                    <img src={imagen} />
                </div>
            </div>



        </>
    )
}

export default Fetsch