//componente de nombre / cargo / imagenes / area

const tam = 130

export const pisos = 
[
    {
        piso: 10,
        personas: [ { nombre: "Juan Bautista Mahiques", cargo: "Fiscal General", area: ["Oficina de Prensa y Comunicación"], imagen: { ruta: "/imagPersonas/JuanMahiques.jpeg", size: tam},backgroundColor:"#FFFFFF" },
                    { nombre: "Pablo Esteban Garcilazo", cargo: "Fiscalía General Adjunta de Gestión", area: ["Oficina Legal y Técnica"], imagen: { ruta: "/imagPersonas/PabloGarcilazo.png", size: tam},backgroundColor:"#f6f6f6" }, 
                    { nombre: "Gabriel Unrein", cargo: "Secretaría General de Política Criminal y Asistencia a la Víctima", area: ["Oficina de Seguimiento de la Política Criminal", "Oficina de Planificación de Géneros y Diversidades"], imagen: { ruta: "/imagPersonas/GabrielUnrein.jpeg", size: tam}, backgroundColor:"#ededed" }, 
                    { nombre: "Martina Pikielny", cargo: "Secretaría General de Relaciones Institucionales", area: ["Oficina de Coordinación Institucional", "Oficina de Relaciones Internacionales", "Área de Capacitación"], imagen: {ruta: "/imagPersonas/MartinaPikielny.png", size: tam}, backgroundColor:"#f6f6f6"}, 
                    { nombre: "Javier Alfonsín", cargo: "Secretaría de Coordinación Administrativa", area: [], imagen: {ruta: "/imagPersonas/JavierAlfonsin.jpeg", size: tam}, backgroundColor:" #ededed" }, 
                    { nombre: "María Cecilia Di Bella", cargo: "Directora de Recursos Humanos", area: [], imagen: { ruta: "/imagPersonas/MariaCecilia.png", size: tam },backgroundColor:"#f6f6f6" } 
                  ]
    }, {
        piso: 9,
        personas: [{ nombre: "Javier Martín Lopez Zavaleta", cargo: "Fiscalía General Adjunta en lo Penal y Contravencional", area: ["Secretaría Judicial"],imagen: {ruta: "/imagPersonas/JuanMahiques.jpeg", size: tam}, backgroundColor:"#ededed" },
                   { nombre: "Juan Gustavo Corvalán", cargo: "Fiscalía General Adjunta en lo Contencioso Administrativo y Tributario", area: [], imagen: {ruta: "/imagPersonas/PabloGarcilazo.png", size: tam},backgroundColor:"#f6f6f6" },
                  ]
    }, {
        piso: 8,
        personas: [{ nombre: "Secretaría de Coordinación Administrativa", cargo: "", area: [], imagen: {ruta: "/imagPersonas/JuanMahiques.jpeg", size: tam} }]
    },

]

export const PB=[
    {
        titulo: "Secretaría de Acceso a la Justicia",
        descripcion0: "OCRD - Oficina Receptora de Denuncias",
        descripcion1: "OUD -  Unidad de Orientación y Denuncia" 
    },
     {
        titulo: "Departamento Técnico Científico - CIJ ",
        descripcion0: "Resguardo de Evidencia Digital"
    },
    {
        titulo: "Unidad de Apoyo Administrativo - CIJ",
        descripcion0: "Mesa de Entradas",
        
    },
]