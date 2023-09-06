import React, { useRef, useState } from 'react'
import Imge0 from './imges/shoppingcard-apfel.jpg'
import Imge1 from './imges/shoppingcard-kirsche.jpg'
import Imge2 from './imges/shoppingcard-orange.jpg'
import soldout from './imges/soldout.jpg'
import Calc from './components/Calc.jsx'

import { AiOutlineApple } from "react-icons/ai";
import './App.css'

function App() {

  const refCaja = useRef(0);
  const cambio = 2;
  // here com the 1.2.3.4 wen click on nr
  const incrementar = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    if (e.target.innerHTML >= 10) {
      e.target.innerHTML = 1;
    }
    if (e.target.innerHTML >= 8) {
      e.target.style.backgroundColor = '#000'
    } else {
      e.target.style.backgroundColor = 'transparent'
    }
  };
  //here is the button for * the nr
  const convertir = () => {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambio;
  };
  // this is for change the picture of solout
  //this if change the photos click
  const soldouts = (j) => {
    if (j.target.src.includes("apfel")) {
      j.target.src = soldout;
    }
    else {
      j.target.src = Imge0;
    }
  }
  //this is input number and change the nr on top of de btn
  const lectura = (e) => {
    refCaja.current.innerHTML = e.target.value
  };
  //this is for change the titel on card 2 from apel to "kirschen" and "  "
  const cambiarTexto = (e) => {
    if (e.target.innerHTML == 'Kirschen') {
      e.target.innerHTML = e.target.innerHTML = ' ';
      e.target.style.backgroundColor = "transpart"
    } else {
      e.target.innerHTML = 'Kirschen';
    }
  };
  //change img 2 and make the image cont hidden
  const cambiarImagen = (e) => {
    if (e.target.src.includes("kirsche")) {
      e.target.src = soldout;
    }
    else {
      e.target.style.visibility = "hidden";
    }
  }




  return (
    <>
      <div className='header-container'>
        <div className='container'>
          <h2><AiOutlineApple /> Apfel</h2>
          <img onClick={soldouts} src={Imge0} />
          <div className='valor' ref={refCaja} onClick={incrementar}></div>
          <button onClick={convertir}>Comprar</button>
          <input onChange={lectura} className='inp' type='number' placeholder='1234...' />
        </div>

        <div className='container'>
          <h2 onClick={cambiarTexto} >Apfel</h2>
          <img onClick={cambiarImagen} src={Imge1} />
          <button>Comprar</button>
        </div>
        <div className='container'>
          <h2>Apfel</h2>
          <img src={Imge2} />
          <button>Comprar</button>
        </div>
      </div>


      <div className='main'>
        <section className='calc-cont'>

          <Calc />
        </section>

      </div>


    </>


  )
}

export default App
