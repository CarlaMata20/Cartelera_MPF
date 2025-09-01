"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";


export default function CarteleraPage() {
  const { id } = useParams();
  const [html, setHtml] = useState('');

  useEffect(() => {
    const html = async () => {
        const fet = await fetch(`/cartelera/api/${id}`);
        const data = await fet.text();
        setHtml(data);
    }

    html(); 

    }, [id]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html}}
    />
  );
}

/*
  useEffect(() => {
    fetch(`/cartelera/api/${id}`)
      .then((res) => res.text()) 
      .then((data) => setHtml(data));
  }, [id]);

  cada vez que [id] cambie, elcodigo se vuelve a ejecutar.
  */