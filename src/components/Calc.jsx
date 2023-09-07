import React, { useState, useRef } from 'react'
import '../stylesheet/Calc.css'

const Calc = () => {
    const [contador, setContador] = useState(0);

    const aumentar = () => {
        setContador(contador + 1);
    }
    const disminuir = () => {
        setContador(contador - 1);
    }
    const restablecer = () => {
        setContador(0);
    }

    //input section
    const [numero1, setNumero1] = useState();
    const [numero2, setNumero2] = useState();
    const [resultado, setResultado] = useState();

    const sumar = () => {
        setResultado(Number(numero1) + Number(numero2))
    }
    const modificar1 = (e) => {
        setNumero1(e.target.value);
    }
    const modificar2 = (e) => {
        setNumero2(e.target.value);
    }

    //prueba section
    const [cont, setCont] = useState(0);
    const [mensaje, setMensaje] = useState();
    const texte = [
        {
            names: "Diego,",
            aficion: "Hola soy diego, estoy aprendiendo JavaScript"
        },
        {
            names: "Andrea,",
            aficion: "Hola soy Andrea, estoy aprendiendo JavaScript"
        },
        {
            names: 'Jorge,',
            aficion: "Me llamo Jorge! AiAiAi"
        }
    ]
    const content = () => {
        setCont(cont + 1);
        if(cont+1>=texte.length){
            setCont(0);
        }
        setMensaje(<h2><span className='red'>{texte[cont].names} </span><span className='green'>{texte[cont].aficion}</span> </h2>);
    }
    return (
        <div>
            <div className='containerSection'>
                <h3> + & - </h3>
                <h2>{contador}</h2>
                <button onClick={aumentar}>Aumentar</button>
                <button onClick={disminuir}>Disminuir</button>
                <button onClick={restablecer}>Restablecer</button>
            </div>

            <section className='sectioninput'>
                <h4>... Input Section  ...</h4>
                <input type='number' onChange={modificar1} value={numero1} placeholder='Give me a Number...' /> +
                <input type='number' onChange={modificar2} value={numero2} placeholder='Give me a Number...' /> =
                <input type='number' value={resultado} readOnly />
                <button onClick={sumar}>Sumar</button>
            </section>

            <section className='prueba'>
                <h2>{mensaje}</h2>
                <button onClick={content}>View Content...</button>
            </section>
        </div>
    )
}

export default Calc