// src/app/cartelera/page.jsx
"use client";
import { useParams } from 'next/navigation';
import Cartelera from '@/componentes/Cartelera';
import Cartelera2 from '@/componentes/Cartelera2';
import Cartelera3 from '@/componentes/Cartelera3';

export default function Page() {
  const { id } = useParams();

  if (id == 1) {
    return <Cartelera />;
  } else if (id == 2) {
    return <Cartelera2 />;
  } else if (id == 3) {
    return <Cartelera3 />;
  } else {
    return <div>Cartelera no encontrada!</div>;
  }
}