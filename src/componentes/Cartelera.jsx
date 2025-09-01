"use client";
//aca juntamos todo.
import Persona from "@/componentes/Personas";
import { pisos } from "@/utils/personasCartelera";
import Slides from "@/componentes/Slides"; // 
import Header from "@/componentes/Header";

export default function Cartelera() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-grow p-6">
        <Header>
         <h1>Fiscalía General</h1>
         <h2>Fiscalía General Adjunta en lo Penal y Contravencional</h2>
         </Header>

        {pisos.map((pisoObj, index) => (
          <article key={index} className="d-flex">
            <aside className="active">
              <span>{pisoObj.piso}</span>
            </aside>

            <ul className="list-group rounded-0 fiscales w-100">
              {pisoObj.personas.map((persona, index) => (
                <Persona key={index} persona={persona} />
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/*  Footer con slides */}
      <Slides />
    </div>
  );
}
