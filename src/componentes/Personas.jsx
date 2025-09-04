//aca deberia hacer el map de la persona.
import "../../public/cardCss.css"
//tambien deberia poner imagenes aca.

export default function Persona({persona}) 
{
    return(
        <li className="persona-item list-group-item border-0 d-flex align-items-center main ml-22 mr-22"
        style={{ backgroundColor: persona.backgroundColor }}>
            <div className="picture-content persona-imagen">
                <picture className="rounded-circle imagen-circulo">
                    <img
                        src={persona.imagen.ruta}
                        alt={persona.nombre}
                        style={{
                            width: persona.imagen.size,
                            height: persona.imagen.size,
                        }}
                    />
                </picture>
            </div>
            <div className="persona-info">
                <div className="persona-titulos">
                    <h1 className="sector persona-cargo">{persona.cargo}</h1>
                    <h2 className="nombre persona-nombre">{persona.nombre}</h2>
                </div>
                {persona.area && persona.area.length > 0 && (
                    <ul className="list-group list-group-flush persona-areas">
                        {persona.area.map((area, index) => (
                            <li key={index}>{area}</li>
                        ))}
                    </ul>
                )}
            </div>
        </li>

    );
}