import Logo from '../logos/logo-3-cosasdev-negro.svg';
import LogoO from '../logos/logo-3-cosasdev-blanco.svg';

//FUENTE: WEB DE MPV CSS: https://andybrewer.github.io/mvp/

export function toggleDarkMode() {
    let bodyTag = document.getElementsByTagName('body')[0];
    let toggleTag = document.getElementById('claroOscuro');
    
    if (bodyTag.classList.contains('lightMode')) {
        bodyTag.classList.replace('lightMode', 'darkMode');
        toggleTag.innerHTML = '☀️ Cambiar a modo claro';
        document.getElementById("logoprincipal").src=Logo;
       
    } else {
        bodyTag.classList.replace('darkMode', 'lightMode');
        toggleTag.innerHTML = '🌑 Cambiar a modo oscuro';
        document.getElementById("logoprincipal").src=LogoO;
        
    }
  }
  