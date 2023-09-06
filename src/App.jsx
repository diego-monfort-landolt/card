import React, { useRef, useState } from 'react'
import Imge0 from './imges/shoppingcard-apfel.jpg'
import Imge1 from './imges/shoppingcard-kirsche.jpg'
import Imge2 from './imges/shoppingcard-orange.jpg'
import soldout from './imges/soldout.jpg'

import { AiOutlineApple } from "react-icons/ai";
import './App.css'

function App() {

  const refCaja = useRef();
  const cambio = 2;

  const incrementar = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
  };

  const convertir = () => {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambio;
  };

  const soldouts = (j) => {
    j.target.src = soldout;
  };

  const lectura = (e) => {
    refCaja.current.innerHTML = e.target.value
  };

  return (
    <>
      <div className='header-container'>
        <div className='container'>
          <h2><AiOutlineApple /> Apfel</h2>
          <img onClick={soldouts} src={Imge0} />
          <div className='valor' ref={refCaja} onClick={incrementar}>1</div>
          <button onClick={convertir}>Comprar</button>
          <input onChange={lectura} className='inp' type='number' placeholder='1234...' />
        </div>
        <div className='container'>
          <h2>Apfel</h2>
          <img src={Imge1} />
          <button>Comprar</button>
        </div>
        <div className='container'>
          <h2>Apfel</h2>
          <img src={Imge2} />
          <button>Comprar</button>
        </div>
      </div>
    </>
  )
}

export default App
