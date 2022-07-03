import React from 'react';

//Importaciones necesarias para Archivos markdown
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from "react";
import remarkGfm from 'remark-gfm'

export default function LeerMDFile (props){

  let file = props.fuente;

  // INVENTO============
  // Leído aquí https://retool.com/blog/react-markdown-component-the-easy-way-to-create-rich-text/

  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return(
    <ReactMarkdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]} children={content} />
  );

}