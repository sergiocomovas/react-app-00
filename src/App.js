import './App.css';
import Header1 from './componentes/Header1.js';
import React from 'react';
import EjemploScrollMouse from './componentes/EjemploScrolTable';
import EjemploBotonTema from './componentes/EjemploBotonTema';
import EjemploLeerMDFile from './componentes/EjemploLeerMDFile';
import EjemploGridCss from './componentes/EjemploGridCss';

import logoeuropass from './logos/logo-2-europa.svg';
import logolinkedin from './logos/logo-2-linkedin.svg'
import logodemandante from './logos/logo-2-demandante.svg'
import imgkofi from './logos/kofi1.png'


function App() {

  //APARECE ABAJO EN LA DESCRIPCIÓN EL ENCABEZADO. EN ESTE CASO HAY UN LOGO DE REACT
  //let textosheader = [{key: 0, titulo: "HOLA", parrafo:"MUNDO"}]
  let titulo = "HOLA, ¿CÓMO VA?";
  let parrafo = <>
    <article>
    <aside>REACT</aside>
    <p>Materializo lo aprendido en mis estudios de creando mi primera página web de pruebas. <br></br>Escrita con cariño y cuidando los detalles. Espero que te guste aunque no sea <i>prefecta*</i> 🥰</p>
    <strong>Vea todo el código de esta web en el repositorio: </strong>
    <a target='_blank' href='https://github.com/sergiocomovas/react-app-00'><i>GITHUB</i></a>  
    <a target='_blank' href='https://www.linkedin.com/pulse/abro-mi-propia-web-de-proyectos-react-sergio-r-gonz%25C3%25A1lez'><strong>MÁS INFORMACIÓN ↗️</strong></a>
    </article>
  </>
;

  //SON LOS DIFERENTES PROYECTOS, PARA AÑADIR LOS ANCHORES (ANCHOR TAG) EN HTML SE PONEN CON LA PROP CON NOMBRE RESERVADO ID=
  let desplegableheader = [
    {key: 0, id: 1, nombre: "Scroll↔️ con la rueda del 🖱️", componente: "EjemploScrollMouse"},
    {key: 1, id: 2, nombre: "Cambiar el Tema⬜⬛", componente: "EjemploBotonTema"},
    {key: 2, id: 3, nombre: "Leer MD en un archivo 📂", componente: "EjemploLeerMDFile"},
    {key: 3, id: 4, nombre: "Parrillas Grid CSS", componente: "EjemploGridCss"}
  ]

  //ME DA ERROR: ME DICE QUE LOS COMPONENTES VAN EN MAYÚSCULAS, ??🪲¿¿
  /*const resultado = desplegableheader.map( (item, key) => <item.componente key={key} desplegable= {item.key}></item.componente>)*/

  return (
    <> 
        <header>
          <Header1 titulo={titulo} parrafo={parrafo} desplegable={desplegableheader} />
        </header>
        <main>
          <EjemploScrollMouse desplegable={desplegableheader[0]}/><hr></hr>
          <EjemploBotonTema desplegable={desplegableheader[1]}/><hr></hr>
          <EjemploLeerMDFile desplegable={desplegableheader[2]} /><hr></hr>
          <EjemploGridCss desplegable={desplegableheader[3]}></EjemploGridCss>
        </main>
        <footer>
          
          <h1>🙋‍♂️<a href="https://comovas.es" target="_blank">COMOVAS.ES</a></h1>
          <span>
          <aside>
            <a target="_blank" href="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/dec55aab-315c-4567-ae14-f44a8450d532?view=html">
              <img src={logoeuropass} alt="Europass" height='60px' ></img><br></br><br></br>
            </a>
            
            <a target="_blank" href="https://www.linkedin.com/in/srgrigo/"><img src={logolinkedin} alt="Europass" height='64px' ></img><br></br><br></br>
            </a>
            <img src={logodemandante} alt="Europass" height='300px' ></img><br></br><br></br>
          </aside>
          <aside style={{verticalAlign: "text-top"}} > 
            <p><strong>INVÍTAME A UN KO-FI:</strong></p>
            <a href='https://ko-fi.com/R6R52N4QJ/donate' target='_blank'><img height='36' style={{border:"0px", height:'36px'}} src={imgkofi}border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>  
            <br></br>
          </aside>

          <aside>
            <h4>©️ SERGIO RIGO GONZÁLEZ</h4>
             <p><a href="https://github.com/sergiocomovas/react-app-00" target="_blank">🐱 GITHUB</a></p>
            <p><a href="mailto:sergiorigo@yahoo.es">📧 CORREO</a></p>
            <p><a href="https://web.comovas.es/about/" target="_blank">⚖️ LEGAL</a></p>
          </aside>
          </span>
          
     
        </footer>
    </>
  );
}

export default App;
