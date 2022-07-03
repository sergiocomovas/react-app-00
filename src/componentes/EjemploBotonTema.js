import React from "react";
import { toggleDarkMode } from './tongleTema.js';
import PraTitulo, { PraTituloDescripcion } from "./PraTitulo.js";

export default function BotonTema(props) {
    const { desplegable } = props;
    const sobreesto = `
En esta sección, construiremos un componente React simple en el que, al presionar un botón, puede **alternar** la apariencia de la web entre el tema negro y el tema blanco. La hoja de estilo elegida para elaborar esta web es minimalista lo que me permite centrarme más en la utilidad y accesibilidad del sitio. **El logotipo de la web**, que es un vector SVG diseñado por mi, también altera la apariencia para adaptarse al diseño.
    
FUENTE: 

* WEB DE MPV CSS: https://andybrewer.github.io/mvp/

WAVE - IMAGEN DE FONDO: 

* https://getwaves.io/`;
    const skills = `CSS, HOJA DE ESTILO, REACT, CLASSNAME, DISEÑO, MVP`;
    return (
        <>
        
        <PraTitulo desplegable={desplegable} skills={skills}></PraTitulo>
        <button onClick={toggleDarkMode}>¡CAMBIA EL COLOR!</button>
        <PraTituloDescripcion desplegable={desplegable} sobreesto={sobreesto}></PraTituloDescripcion>

        </>
    );
}