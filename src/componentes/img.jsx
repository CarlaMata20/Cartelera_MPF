// components/Image.jsx (o mejor components/MiImagen.jsx)
import NextImage from 'next/image';
import "../../public/Grillas.css";
function MiImagen() {
  return (
    <div className="contenedor-imagen">
      <NextImage
        src="/ImgPB/CIJpolicia.png"
        alt="Descripción de la imagen policía"
        width={300}
        height={200}
        className="imagen-estilo"
      />
    </div>
  );
}
;

export default MiImagen;