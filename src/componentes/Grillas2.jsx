import "../../public/Grillas.css";
import React from 'react';

const Grilla2 = ({ PB2 }) => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="tituloH1">PB</h1>
        {PB2.map((item, index) => (
          <div key={index} className="Grilla">
              <div className="card-body mb-2" >
                <h3 className="card-title grilla-title">{item.titulo}</h3>
                <p className="card-text grilla-descripcion">{item.descripcion0}</p>
                {item.descripcion1 && (
                  <p className="card-text grilla-descripcion">{item.descripcion1}</p>
                )}
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Grilla2;
