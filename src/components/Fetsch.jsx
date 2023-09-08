import React, { useEffect, useState } from 'react'
import '../stylesheet/fetsch.css'

const Fetsch = () => {
    const [datos, setDatos] = useState([])


    useEffect(() => {
        const url = "https://randomuser.me/api/?results=2"
        const peticion = fetch(url);
        peticion
            .then(datos => datos.json())
            .then(lectura => {
                lectura.results.map((persona) => {
                    setDatos((e) =>
                        [...e, <div key={ persona.email }>
                            <div>
                                <img src={persona.picture.large} />
                            </div>
                            <div>{ persona.name.first } { persona.name.last } </div>
                        </div>])
                })
            })
            .catch(console.log())
    }, [])

    return (
        <>
            <div className='fetsch-header'>
                <h2>Random People Refresh</h2>
                {datos}
            </div>



        </>
    )
}

export default Fetsch