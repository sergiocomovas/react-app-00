import React from 'react'
import logo from '../logo.svg';

export default function Nav(props){
    const {login} = props;
    return (
        <>
        <nav>
          <img alt='logo'src={logo} height="30px"/>
          <ul><li>UNO</li><li>DOS</li><li>TRES<ul><li>TRES UNO</li><li>TRES DOS</li></ul></li></ul>
          <h1>{login}</h1>
        </nav>
        </>
    );
}
