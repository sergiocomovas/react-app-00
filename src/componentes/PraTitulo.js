/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import ReactMarkdown from 'react-markdown';

export default function PraTitulo(props){
    
    const {desplegable, skills} = props;

    return (
        <>
          <h1 id={"pra"+desplegable.id}>PRÁCTICA {desplegable.id}: {desplegable.nombre}</h1>
          <p><strong>🔥SKILLS:</strong> {skills}<br></br></p>
        </>
    );
}

export function PraTituloDescripcion(props){

    const {desplegable, sobreesto } = props;
    return (
      <>
        <details>
            <summary>RESUMEN PRÁCTICA {desplegable.id}</summary>
            <ReactMarkdown children={sobreesto}/>

            <code>
            ⚙️ Componente: {desplegable.componente}
            </code>
               
        </details>

      </>  
    );
}