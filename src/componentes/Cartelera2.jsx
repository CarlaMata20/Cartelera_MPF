"use client";
//CARTELERA 2 PB
import Slides from "@/componentes/Slides2"; 
import Footer from "@/componentes/footerCartelera2";
import { PB } from "@/utils/personasCartelera";
import Grilla from "@/componentes/Grillas";

function Cartelera2() {
    return (
        <div style={{backgroundColor: "#1a365d"}}>
          <Grilla PB={PB} />
            <Slides />
            <Footer />
        </div>
    );
}

 export default Cartelera2;