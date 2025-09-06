"use client";
//CARTELERA 3 PB2
import MiImagen  from '../componentes/img';
import { PB2 } from "@/utils/personasCartelera";
import Grilla2 from "@/componentes/Grillas";


function Cartelera3() {
    return (
        <div style={{backgroundColor: "#1a365d"}}>
          <Grilla2 PB={PB2} />
            <MiImagen/>
         
        </div>
    );
}

 export default Cartelera3;