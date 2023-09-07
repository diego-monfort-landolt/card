import React, { useState, useRef } from 'react'
import '../stylesheet/pruebas.css'

const Pruebas = () => {
    const [zaeler, setZaeler] = useState(0)
    const [anzeige, setAnzeige] = useState()
    const geschriben = [
        {
            salt: 'Diego,',
            angezeigt: ' lernt wie man programierer wird',
        },
        {
            salt: 'Andrea,',
            angezeigt: ' lernt wie man Sachbearbeiterin wird',
        },
        {
            salt: 'Jorge,',
            angezeigt: ' lernt wie man einen Baum schneidet',
        },

    ]
// here go in the text 0,1,2
    const wechsel = () => {
        setZaeler(zaeler + 1);
        if (zaeler + 1 >= geschriben.length) {
            setZaeler(0);
        }
        setAnzeige(<h2><span className='red'>{geschriben[zaeler].salt} </span><span className='green'>{geschriben[zaeler].angezeigt}</span> </h2>);
    }



return (

    <>
        <div className='karton'>

            <h2 >{anzeige}</h2>
            <button onClick={wechsel}>Show Text</button>
        </div>


    </>
)
}

export default Pruebas