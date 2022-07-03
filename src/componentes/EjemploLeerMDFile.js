import React from "react";
import PraTitulo, { PraTituloDescripcion } from "./PraTitulo.js";
import LeerMDFile from './LeerMDFile.js';

export default function EjemploLeerMDFile(props) {
    const { desplegable } = props;
    const sobreesto = `
Los diseñadores a menudo quieren ver cómo se verá su diseño en un sitio web antes de implementarlo. 
    
Con React, el proceso de renderizar el diseño es fácil y rápido. El diseñador puede simplemente cargar un archivo en formato MARKDOWN.MD (donde puedes aplicar **negritas**, _cursivas_, TÍTULOS y hacer tablas sin usar código HTML) y mostrarlo en la pantalla para tener una idea de cómo se vería. 
    
Esta es una excelente manera para que los diseñadores presenten ideas rápidamente y también se aseguren de que su diseño responda en diferentes dispositivos.
    
Me he basado en la documentación obtenida en la siguiente páginas web para obtener los resultados deseados:

* Leído aquí: https://retool.com/blog/react-markdown-component-the-easy-way-to-create-rich-text/ `;
    const skills = `CSS, MARKDOWN, DISEÑO, CONVERSIÓN DE FORMATOS, LECTURA DE DATOS, JAVASCRIPT, REACT`;
    return (
        <>
        
        <PraTitulo desplegable={desplegable} skills={skills}></PraTitulo>
        
        <section className="row">  
            <aside className="col3">
                <h2><code>DOCUMENTO ORIGINAL</code></h2>
                Abrir en ventana nueva: <a href="../MD/texto1.md" target="_blank">FORMATO MARKDOWN ARCHIVO TEXTO1.MD  ↗</a>
            </aside>
            <aside className="col6" style={{backgroundColor:'var(--color-bg-secondary)'}}>
                <h2><code>DOCUMENTO CODIFICADO MD</code></h2>
                <LeerMDFile fuente="../MD/texto1.md"></LeerMDFile></aside>
        </section>
      

        <PraTituloDescripcion desplegable={desplegable} sobreesto={sobreesto}></PraTituloDescripcion>

        </>
    );
}