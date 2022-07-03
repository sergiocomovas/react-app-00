//import React, { useReducer } from 'react';
import React from 'react';
import { useHorizontalScroll } from './scrollM';
import PraTitulo, { PraTituloDescripcion } from './PraTitulo';


export default function ScrollMouse(props){
    const scrollRef1 = useHorizontalScroll();   
    const scrollRef2 = useHorizontalScroll();
    
    const {desplegable} = props;
    const skills = `JAVASCRIP, CSS, REACT, DISEÑO, UTILIDAD, DATOS`
    const sobreesto = `

## PROPÓSITO:
En esta práctica quería usar la rueda del ratón para girar horizontalmente una tabla larga de datos en lugar de seleccionar el scroll y arrastrarlo manualmente. Es una característica que muchas veces echo de menos en webs modernas.

Desplazarse con la rueda del mouse es una técnica común en el diseño web. Sin embargo, puede ser frustrante para las personas que usan un teclado y un mouse. En el ejemplo le muestro cómo hacer que su componente React se desplace horizontalmente con la rueda del mouse.

Puede consultar la documentación usada y el código fuente en mi GitHib y el cómo implementar esta funcionalidad:


Para los **datos**:

* https://tabletomarkdown.com/convert-spreadsheet-to-markdown/ 
* https://tableconvert.com/markdown-to-html 
* https://www.ine.es/dynt3/inebase/es/index.htm?padre=517&capsel=525

 
Para hacer el **scroll con la rueda del ratón**:

* https://stackoverflow.com/questions/68658249/how-to-do-react-horizontal-scroll-using-mouse-wheel
    `;
    

    return(
        <>
            <PraTitulo desplegable={desplegable} skills={skills}></PraTitulo>

            PUEBLOS DE BALEARES Y HABITANTES 2021<br></br>
            <table ref={scrollRef1}>
                <thead><tr>
                    <td>07002 Alaior</td>
                    <td>07001 Alaró</td>
                    <td>07003 Alcúdia</td>
                    <td>07004 Algaida</td>
                    <td>07005 Andratx</td>
                    <td>07901 Ariany</td>
                    <td>07006 Artà</td>
                    <td>07007 Banyalbufar</td>
                    <td>07008 Binissalem</td>
                    <td>07009 Búger</td>
                    <td>07010 Bunyola</td>
                    <td>07011 Calvià</td>
                    <td>07012 Campanet</td>
                    <td>07013 Campos</td>
                    <td>07014 Capdepera</td>
                    <td>07064 Castell, Es</td>
                    <td>07015 Ciutadella de Menorca</td>
                    <td>07016 Consell</td>
                    <td>07017 Costitx</td>
                    <td>07018 Deià</td>
                    <td>07026 Eivissa</td>
                    <td>07019 Escorca</td>
                    <td>07020 Esporles</td>
                    <td>07021 Estellencs</td>
                    <td>07022 Felanitx</td>
                    <td>07023 Ferreries</td>
                    <td>07024 Formentera</td>
                    <td>07025 Fornalutx</td>
                    <td>07027 Inca</td>
                    <td>07028 Lloret de Vistalegre</td>
                    <td>07029 Lloseta</td>
                    <td>07030 Llubí</td>
                    <td>07031 Llucmajor</td>
                    <td>07033 Manacor</td>
                    <td>07034 Mancor de la Vall</td>
                    <td>07032 Maó</td>
                    <td>07035 Maria de la Salut</td>
                    <td>07036 Marratxí</td>
                    <td>07037 Mercadal, Es</td>
                    <td>07902 Migjorn Gran, Es</td>
                    <td>07038 Montuïri</td>
                    <td>07039 Muro</td>
                    <td>07040 Palma</td>
                    <td>07041 Petra</td>
                    <td>07044 Pobla, Sa</td>
                    <td>07042 Pollença</td>
                    <td>07043 Porreres</td>
                    <td>07045 Puigpunyent</td>
                    <td>07059 Salines, Ses</td>
                    <td>07046 Sant Antoni de Portmany</td>
                    <td>07049 Sant Joan</td>
                    <td>07050 Sant Joan de Labritja</td>
                    <td>07048 Sant Josep de sa Talaia</td>
                    <td>07051 Sant Llorenç des Cardassar</td>
                    <td>07052 Sant Lluís</td>
                    <td>07053 Santa Eugènia</td>
                    <td>07054 Santa Eulària des Riu</td>
                    <td>07055 Santa Margalida</td>
                    <td>07056 Santa María del Camí</td>
                    <td>07057 Santanyí</td>
                    <td>07058 Selva</td>
                    <td>07047 Sencelles</td>
                    <td>07060 Sineu</td>
                    <td>07061 Sóller</td>
                    <td>07062 Son Servera</td>
                    <td>07063 Valldemossa</td>
                    <td>07065 Vilafranca de Bonany</td>
                </tr></thead>
                <tbody><tr>
                    <td>9.477</td>
                    <td>5.741</td>
                    <td>20.651</td>
                    <td>5.963</td>
                    <td>11.571</td>
                    <td>897</td>
                    <td>7.984</td>
                    <td>542</td>
                    <td>8.895</td>
                    <td>1.084</td>
                    <td>7.037</td>
                    <td>51.567</td>
                    <td>2.684</td>
                    <td>11.425</td>
                    <td>12.003</td>
                    <td>7.530</td>
                    <td>30.638</td>
                    <td>4.243</td>
                    <td>1.379</td>
                    <td>674</td>
                    <td>50.643</td>
                    <td>181</td>
                    <td>5.134</td>
                    <td>326</td>
                    <td>18.164</td>
                    <td>4.892</td>
                    <td>11.708</td>
                    <td>682</td>
                    <td>33.726</td>
                    <td>1.465</td>
                    <td>6.250</td>
                    <td>2.385</td>
                    <td>38.224</td>
                    <td>44.809</td>
                    <td>1.569</td>
                    <td>29.578</td>
                    <td>2.242</td>
                    <td>38.357</td>
                    <td>5.444</td>
                    <td>1.500</td>
                    <td>3.087</td>
                    <td>7.515</td>
                    <td>419.366</td>
                    <td>3.028</td>
                    <td>13.873</td>
                    <td>16.969</td>
                    <td>5.624</td>
                    <td>2.057</td>
                    <td>5.010</td>
                    <td>27.205</td>
                    <td>2.185</td>
                    <td>6.635</td>
                    <td>28.299</td>
                    <td>8.920</td>
                    <td>6.877</td>
                    <td>1.724</td>
                    <td>40.038</td>
                    <td>12.767</td>
                    <td>7.507</td>
                    <td>12.342</td>
                    <td>4.126</td>
                    <td>3.542</td>
                    <td>4.122</td>
                    <td>13.491</td>
                    <td>11.835</td>
                    <td>2.042</td>
                    <td>3.558</td>
                </tr></tbody>
            </table>

            PUEBLOS DE BADAJOZ Y HABITANTES 2021<br></br>
            <table ref={scrollRef2}>
                <thead><tr>
                    <td>06001 Acedera</td>
                    <td>06002 Aceuchal</td>
                    <td>06003 Ahillones</td>
                    <td>06004 Alange</td>
                    <td>06005 Albuera, La</td>
                    <td>06006 Alburquerque</td>
                    <td>06007 Alconchel</td>
                    <td>06008 Alconera</td>
                    <td>06009 Aljucén</td>
                    <td>06010 Almendral</td>
                    <td>06011 Almendralejo</td>
                    <td>06012 Arroyo de San Serván</td>
                    <td>06013 Atalaya</td>
                    <td>06014 Azuaga</td>
                    <td>06015 Badajoz</td>
                    <td>06016 Barcarrota</td>
                    <td>06017 Baterno</td>
                    <td>06018 Benquerencia de la Serena</td>
                    <td>06019 Berlanga</td>
                    <td>06020 Bienvenida</td>
                    <td>06021 Bodonal de la Sierra</td>
                    <td>06022 Burguillos del Cerro</td>
                    <td>06023 Cabeza del Buey</td>
                    <td>06024 Cabeza la Vaca</td>
                    <td>06025 Calamonte</td>
                    <td>06026 Calera de León</td>
                    <td>06027 Calzadilla de los Barros</td>
                    <td>06028 Campanario</td>
                    <td>06029 Campillo de Llerena</td>
                    <td>06030 Capilla</td>
                    <td>06031 Carmonita</td>
                    <td>06032 Carrascalejo, El</td>
                    <td>06033 Casas de Don Pedro</td>
                    <td>06034 Casas de Reina</td>
                    <td>06035 Castilblanco</td>
                    <td>06036 Castuera</td>
                    <td>06042 Cheles</td>
                    <td>06037 Codosera, La</td>
                    <td>06038 Cordobilla de Lácara</td>
                    <td>06039 Coronada, La</td>
                    <td>06040 Corte de Peleas</td>
                    <td>06041 Cristina</td>
                    <td>06043 Don Álvaro</td>
                    <td>06044 Don Benito</td>
                    <td>06045 Entrín Bajo</td>
                    <td>06046 Esparragalejo</td>
                    <td>06047 Esparragosa de la Serena</td>
                    <td>06048 Esparragosa de Lares</td>
                    <td>06049 Feria</td>
                    <td>06050 Fregenal de la Sierra</td>
                    <td>06051 Fuenlabrada de los Montes</td>
                    <td>06052 Fuente de Cantos</td>
                    <td>06053 Fuente del Arco</td>
                    <td>06054 Fuente del Maestre</td>
                    <td>06055 Fuentes de León</td>
                    <td>06056 Garbayuela</td>
                    <td>06057 Garlitos</td>
                    <td>06058 Garrovilla, La</td>
                    <td>06059 Granja de Torrehermosa</td>
                    <td>06903 Guadiana</td>
                    <td>06060 Guareña</td>
                    <td>06061 Haba, La</td>
                    <td>06062 Helechosa de los Montes</td>
                    <td>06063 Herrera del Duque</td>
                    <td>06064 Higuera de la Serena</td>
                    <td>06065 Higuera de Llerena</td>
                    <td>06066 Higuera de Vargas</td>
                    <td>06067 Higuera la Real</td>
                    <td>06068 Hinojosa del Valle</td>
                    <td>06069 Hornachos</td>
                    <td>06070 Jerez de los Caballeros</td>
                    <td>06071 Lapa, La</td>
                    <td>06073 Llera</td>
                    <td>06074 Llerena</td>
                    <td>06072 Lobón</td>
                    <td>06075 Magacela</td>
                    <td>06076 Maguilla</td>
                    <td>06077 Malcocinado</td>
                    <td>06078 Malpartida de la Serena</td>
                    <td>06079 Manchita</td>
                    <td>06080 Medellín</td>
                    <td>06081 Medina de las Torres</td>
                    <td>06082 Mengabril</td>
                    <td>06083 Mérida</td>
                    <td>06084 Mirandilla</td>
                    <td>06085 Monesterio</td>
                    <td>06086 Montemolín</td>
                    <td>06087 Monterrubio de la Serena</td>
                    <td>06088 Montijo</td>
                    <td>06089 Morera, La</td>
                    <td>06090 Nava de Santiago, La</td>
                    <td>06091 Navalvillar de Pela</td>
                    <td>06092 Nogales</td>
                    <td>06093 Oliva de la Frontera</td>
                    <td>06094 Oliva de Mérida</td>
                    <td>06095 Olivenza</td>
                    <td>06096 Orellana de la Sierra</td>
                    <td>06097 Orellana la Vieja</td>
                    <td>06098 Palomas</td>
                    <td>06099 Parra, La</td>
                    <td>06100 Peñalsordo</td>
                    <td>06101 Peraleda del Zaucejo</td>
                    <td>06102 Puebla de Alcocer</td>
                    <td>06103 Puebla de la Calzada</td>
                    <td>06104 Puebla de la Reina</td>
                    <td>06107 Puebla de Obando</td>
                    <td>06108 Puebla de Sancho Pérez</td>
                    <td>06105 Puebla del Maestre</td>
                    <td>06106 Puebla del Prior</td>
                    <td>06902 Pueblonuevo del Guadiana</td>
                    <td>06109 Quintana de la Serena</td>
                    <td>06110 Reina</td>
                    <td>06111 Rena</td>
                    <td>06112 Retamal de Llerena</td>
                    <td>06113 Ribera del Fresno</td>
                    <td>06114 Risco</td>
                    <td>06115 Roca de la Sierra, La</td>
                    <td>06116 Salvaleón</td>
                    <td>06117 Salvatierra de los Barros</td>
                    <td>06119 San Pedro de Mérida</td>
                    <td>06123 San Vicente de Alcántara</td>
                    <td>06118 Sancti-Spíritus</td>
                    <td>06120 Santa Amalia</td>
                    <td>06121 Santa Marta</td>
                    <td>06122 Santos de Maimona, Los</td>
                    <td>06124 Segura de León</td>
                    <td>06125 Siruela</td>
                    <td>06126 Solana de los Barros</td>
                    <td>06127 Talarrubias</td>
                    <td>06128 Talavera la Real</td>
                    <td>06129 Táliga</td>
                    <td>06130 Tamurejo</td>
                    <td>06131 Torre de Miguel Sesmero</td>
                    <td>06132 Torremayor</td>
                    <td>06133 Torremejía</td>
                    <td>06134 Trasierra</td>
                    <td>06135 Trujillanos</td>
                    <td>06136 Usagre</td>
                    <td>06137 Valdecaballeros</td>
                    <td>06901 Valdelacalzada</td>
                    <td>06138 Valdetorres</td>
                    <td>06139 Valencia de las Torres</td>
                    <td>06140 Valencia del Mombuey</td>
                    <td>06141 Valencia del Ventoso</td>
                    <td>06146 Valle de la Serena</td>
                    <td>06147 Valle de Matamoros</td>
                    <td>06148 Valle de Santa Ana</td>
                    <td>06142 Valverde de Burguillos</td>
                    <td>06143 Valverde de Leganés</td>
                    <td>06144 Valverde de Llerena</td>
                    <td>06145 Valverde de Mérida</td>
                    <td>06149 Villafranca de los Barros</td>
                    <td>06150 Villagarcía de la Torre</td>
                    <td>06151 Villagonzalo</td>
                    <td>06152 Villalba de los Barros</td>
                    <td>06153 Villanueva de la Serena</td>
                    <td>06154 Villanueva del Fresno</td>
                    <td>06156 Villar de Rena</td>
                    <td>06155 Villar del Rey</td>
                    <td>06157 Villarta de los Montes</td>
                    <td>06158 Zafra</td>
                    <td>06159 Zahínos</td>
                    <td>06160 Zalamea de la Serena</td>
                    <td>06162 Zarza, La</td>
                    <td>06161 Zarza-Capilla</td>
                </tr></thead>
                <tbody><tr>
                    <td>820</td>
                    <td>5.467</td>
                    <td>851</td>
                    <td>1.850</td>
                    <td>2.026</td>
                    <td>5.245</td>
                    <td>1.654</td>
                    <td>744</td>
                    <td>250</td>
                    <td>1.223</td>
                    <td>33.741</td>
                    <td>4.081</td>
                    <td>288</td>
                    <td>7.702</td>
                    <td>150.610</td>
                    <td>3.498</td>
                    <td>258</td>
                    <td>808</td>
                    <td>2.306</td>
                    <td>2.087</td>
                    <td>1.017</td>
                    <td>3.076</td>
                    <td>4.732</td>
                    <td>1.298</td>
                    <td>6.152</td>
                    <td>946</td>
                    <td>721</td>
                    <td>4.823</td>
                    <td>1.333</td>
                    <td>165</td>
                    <td>532</td>
                    <td>90</td>
                    <td>1.456</td>
                    <td>202</td>
                    <td>903</td>
                    <td>5.708</td>
                    <td>1.172</td>
                    <td>2.049</td>
                    <td>878</td>
                    <td>2.175</td>
                    <td>1.207</td>
                    <td>551</td>
                    <td>784</td>
                    <td>37.275</td>
                    <td>552</td>
                    <td>1.474</td>
                    <td>994</td>
                    <td>895</td>
                    <td>1.077</td>
                    <td>4.811</td>
                    <td>1.793</td>
                    <td>4.684</td>
                    <td>681</td>
                    <td>6.704</td>
                    <td>2.244</td>
                    <td>510</td>
                    <td>554</td>
                    <td>2.334</td>
                    <td>1.965</td>
                    <td>2.465</td>
                    <td>6.812</td>
                    <td>1.206</td>
                    <td>612</td>
                    <td>3.465</td>
                    <td>937</td>
                    <td>335</td>
                    <td>1.930</td>
                    <td>2.202</td>
                    <td>476</td>
                    <td>3.509</td>
                    <td>9.171</td>
                    <td>277</td>
                    <td>823</td>
                    <td>5.697</td>
                    <td>2.760</td>
                    <td>511</td>
                    <td>960</td>
                    <td>351</td>
                    <td>536</td>
                    <td>769</td>
                    <td>2.247</td>
                    <td>1.163</td>
                    <td>489</td>
                    <td>59.424</td>
                    <td>1.247</td>
                    <td>4.267</td>
                    <td>1.365</td>
                    <td>2.312</td>
                    <td>15.483</td>
                    <td>714</td>
                    <td>933</td>
                    <td>4.392</td>
                    <td>646</td>
                    <td>5.083</td>
                    <td>1.710</td>
                    <td>11.871</td>
                    <td>255</td>
                    <td>2.627</td>
                    <td>673</td>
                    <td>1.322</td>
                    <td>870</td>
                    <td>490</td>
                    <td>1.174</td>
                    <td>5.861</td>
                    <td>719</td>
                    <td>1.839</td>
                    <td>2.665</td>
                    <td>665</td>
                    <td>469</td>
                    <td>1.989</td>
                    <td>4.576</td>
                    <td>151</td>
                    <td>607</td>
                    <td>432</td>
                    <td>3.268</td>
                    <td>130</td>
                    <td>1.442</td>
                    <td>1.692</td>
                    <td>1.608</td>
                    <td>852</td>
                    <td>5.340</td>
                    <td>163</td>
                    <td>3.957</td>
                    <td>4.094</td>
                    <td>8.064</td>
                    <td>1.834</td>
                    <td>1.852</td>
                    <td>2.575</td>
                    <td>3.355</td>
                    <td>5.311</td>
                    <td>674</td>
                    <td>211</td>
                    <td>1.235</td>
                    <td>985</td>
                    <td>2.249</td>
                    <td>617</td>
                    <td>1.389</td>
                    <td>1.761</td>
                    <td>1.088</td>
                    <td>2.731</td>
                    <td>1.170</td>
                    <td>519</td>
                    <td>715</td>
                    <td>1.931</td>
                    <td>1.160</td>
                    <td>358</td>
                    <td>1.129</td>
                    <td>278</td>
                    <td>4.157</td>
                    <td>566</td>
                    <td>1.036</td>
                    <td>12.534</td>
                    <td>910</td>
                    <td>1.231</td>
                    <td>1.472</td>
                    <td>25.837</td>
                    <td>3.335</td>
                    <td>1.332</td>
                    <td>2.103</td>
                    <td>418</td>
                    <td>16.786</td>
                    <td>2.780</td>
                    <td>3.473</td>
                    <td>3.380</td>
                    <td>296</td>
                </tr></tbody>
            </table>

            <PraTituloDescripcion desplegable={desplegable} sobreesto={sobreesto}></PraTituloDescripcion>

        </>
    );

}
