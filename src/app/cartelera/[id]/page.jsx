// src/app/cartelera/page.jsx
"use client";
import { useParams } from 'next/navigation';
import Cartelera from '@/componentes/Cartelera';
import Cartelera2 from '@/componentes/Cartelera2';

export default function Page() {
  const { id } = useParams();

  if (id == 0) {
    return <Cartelera />;
  } else if (id == 1) {
    return <Cartelera2 />;
  } else {
    return <div>Cartelera no encontrada!</div>;
  }
}