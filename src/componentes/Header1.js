/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../logos/logo-3-cosasdev-negro.svg';
/*import LogoO from '../logos/logo-works-2.svg';*/
import Logoreact from '../logos/logo.svg';
import { toggleDarkMode } from './tongleTema.js';

//:https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react
//import { Link, animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";

export default function Header1(props){
    const {titulo, parrafo, desplegable} = props;
    

  //ENCONTRADA SOLUCIÓN EN https://reactgo.com/react-for-loop/
  //PROBLEMA: UN FOR TRADICIONAL NO DABA EL RESULTADO ESPERADO. USAR array.PUSH()
  //let totalproyectos = [];  
  /*for (let item of desplegable){
      totalproyectos.push(
        <>
        <p></p>
        <li id={item.id+10} key={item.id+10}><a href={"#"+item.name}><em>{item.id}) {item.name}</em></a></li>
        </>);
    }
  */

  //MÁS TARDE ME DI CUENTA QUE HABÍA QUE USARLO TAL QUE ASÍ:
  const totalproyectos = desplegable.map((item) =>
    <li key={item.id}>
      <Link style={{cursor: 'pointer'}}
            spy={false}
            smooth={true}
            offset={-70}
            duration={500} 
            to={"pra"+item.id}>
              <em>
                {item.id}) {item.nombre}
              </em>
      </Link>
    </li>
  );

    return (
        <>
        <nav>
          <img id="logoprincipal" alt='logo'src={Logo} height="70px"/>
            <ul>
              <li>Prácticas: </li>
              <li><button>📁 Índice <sub><sup>{desplegable.length}</sup></sub></button>
                <ul id="subid" name="subid">
                  {totalproyectos}<p></p>
                  <br/>TEMA: <a href="javascript:void(0);" onClick={toggleDarkMode}><span id="claroOscuro">☀️ Cambiar a modo claro</span></a>
                </ul>
              </li>
            </ul>
        </nav>
        <img width="15%" alt="LOGO DE REACT" src={Logoreact}></img>
          <h1>{titulo}</h1>
          {parrafo}
        </>
    );
}


