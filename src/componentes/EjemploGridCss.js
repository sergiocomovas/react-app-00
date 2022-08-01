/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "../Grid.css";
import PraTitulo, { PraTituloDescripcion } from "./PraTitulo.js";

export default function EjemploGridCss(props){
    const { desplegable } = props;
    const sobreesto = `En este componente de React, puede cambiar la estructura de una CUADRÍCULA CSS (GRID) haciendo clic en un botón. Esto mejorará su experiencia visual.

El componente React está escrito en JavaScript puro pero actúa a la vez sin interferir permitiendo la versalidad de los proyectos.

Basado en:
*  https://wdrfree.com/254/how-to-create-simple-css-grid-system `;
    const skills = `CSS, JAVASCRIPT, CLASES CSS, RESOLUCIÓN DE PROBLEMAS, ADAPTACIÓN, DISEÑO`;

    /*const rand = [
        {row1classname: "col1",row2classname: "col5",row3classname: "col5",row4classname: "col1"},
        {row1classname: "col5",row2classname: "col1",row3classname: "col1",row4classname: "col5"},
        {row1classname: "col3",row2classname: "col3",row3classname: "col3",row4classname: "col3"}
    ];*/
    const col = { row1classname: "col1", row2classname: "col5",row3classname: "col5",row4classname: "col1" };

    function grid3333(){
        document.getElementById("s1").classList.replace("col1", "col3");
        document.getElementById("s2").classList.replace("col5", "col3");
        document.getElementById("s3").classList.replace("col5", "col3");
        document.getElementById("s4").classList.replace("col1", "col3");
        document.getElementById("s1s").innerHTML = ".col3";
        document.getElementById("s2s").innerHTML = ".col3";
        document.getElementById("s3s").innerHTML = ".col3";
        document.getElementById("s4s").innerHTML = ".col3";
        document.getElementById("b1").hidden = "hidden"
        document.getElementById("b2").hidden = ""
        return 0;
    };

    function grid1551(){
        document.getElementById("s1").classList.replace("col3", "col1");
        document.getElementById("s2").classList.replace("col3", "col5");
        document.getElementById("s3").classList.replace("col3", "col5");
        document.getElementById("s4").classList.replace("col3", "col1");
        document.getElementById("s1s").innerHTML = ".col1";
        document.getElementById("s2s").innerHTML = ".col5";
        document.getElementById("s3s").innerHTML = ".col5";
        document.getElementById("s4s").innerHTML = ".col1";
        document.getElementById("b1").hidden = ""
        document.getElementById("b2").hidden = "hidden"
        return 0;
    };

    return (
        <>

        <PraTitulo desplegable={desplegable} skills={skills}></PraTitulo>

        <p>GRID:<br></br>
        <button id="b1" hidden="" onClick={grid3333}>Cambia a 3-3-3-3</button>
        <button id="b2" hidden="hidden" onClick={grid1551}>Cambia a 1-5-5-1</button></p>
        <div style={{border: "2px solid #FFF",borderRadius: "10px 10px", overflowX:"scroll", Width: "100%", whiteSpace:"nowrap"}} className="row">
            <div id="s1"style={{borderRadius: "8px 0px 0px 8px", backgroundColor: "Red", textAlign: "center"}} className={col.row1classname}>🌹<br></br>Rojo<br></br><code id="s1s">.{col.row1classname}</code></div>
            <div id="s2" style={{backgroundColor: "Blue", textAlign: "center"}}className={col.row2classname}>💧<br></br>Azul<br></br><code id="s2s">.{col.row2classname}</code></div>
            <div id="s3" style={{backgroundColor: "Green", textAlign: "center"}} className={col.row3classname}>🥦 <br></br>Verde<br></br><code id="s3s">.{col.row3classname}</code></div>
            <div id="s4" style={{borderRadius: "0px 8px 8px 0px", backgroundColor: "Violet", textAlign: "center"}}className={col.row4classname}>🍆 <br></br>Violeta<br></br><code id="s4s">.{col.row4classname}</code></div>
        </div>

        <PraTituloDescripcion desplegable={desplegable} sobreesto={sobreesto}></PraTituloDescripcion>

        </>
    );
    

}



