// src/data/cvData.js
export const cabecera = {
  nombre: "Simon Vasquez escobar",
  profesion: "Desarrollador UI Frontend"
};

export const perfil = {
  texto:
    "Tecnólogo en Análisis y Desarrollo de Software con experiencia en desarrollo web y móvil, apasionado por la tecnología."
};

export const educacion = [
  {
    id: 1,
    titulo: "Ingeniería en Sistemas",
    universidad: "Universidad Nacional",
    periodo: "2018-2022"
  },
   {id: 2, titulo: " Tecnico en Programacion de Software", instituto: "SENA", periodo: "2023-2024" },
    {id: 3, titulo: "Comportamiento Emprendedor", instituto: "SENA", periodo: "2022-2022" },
    {id: 4, titulo: "Desarrollo de Aplicaciones Móviles", instituto: "Platzi", periodo: "2023-2023" },
    {id: 5, titulo: "Curso de React", instituto: "FreeCodeCamp", periodo: "2023-2023" }
];

export const experiencia = [
  {
    id: 1,
    puesto: "Desarrollador Full Stack",
    empresa: "Navisoft Gaming",
    periodo: "2022-2024"
  },
  {
    id: 2,
    puesto: "Instructor TIC",
    empresa: "SENA",
    periodo: "2020-2022"
  },
   {id: 3, puesto: "Hacker", empresa: "Anonymous", periodo: "2018-2020", descripcion: "Participación en proyectos de ciberseguridad y hacking ético." },
    { id: 4, puesto: "Desarrollador Web", empresa: "Tech Solutions", periodo: "2016-2018", descripcion: "Desarrollo de sitios web y aplicaciones utilizando HTML, CSS y JavaScript." },
    { id: 5, puesto: "Analista de Sistemas", empresa: "Innovatech", periodo: "2014-2016", descripcion: "Análisis y diseño de sistemas para mejorar procesos empresariales." },
    { id: 6, puesto: "Soporte Técnico", empresa: "Global IT", periodo: "2012-2014", descripcion: "Atención y resolución de problemas técnicos para clientes." },
    { id: 7, puesto: "Practicante de Desarrollo", empresa: "StartUp Inc.", periodo: "2010-2012", descripcion: "Asistencia en el desarrollo de software y aplicaciones móviles." },
    { id: 8, puesto: "Asistente de Proyectos", empresa: "TechCorp", periodo: "2008-2010", descripcion: "Apoyo en la gestión y ejecución de proyectos tecnológicos." },
    { id: 9, puesto: "Consultor IT", empresa: "Digital Solutions", periodo: "2006-2008", descripcion: "Asesoramiento en soluciones tecnológicas para empresas." },
    { id: 10, puesto: "Gerente de Proyectos", empresa: "Future Tech", periodo: "2004-2006", descripcion: "Gestión de proyectos tecnológicos y coordinación de equipos." },


];

export const stackTecnologias = [
  { id: 1, nombre: "React", tipo: "frontend" },
  { id: 2, nombre: "Node.js", tipo: "backend" },
  { id: 3, nombre: "JavaScript", tipo: "frontend" },
  { id: 4, nombre: "PostgreSQL", tipo: "base de datos" }
];

/* Nuevas secciones */
export const proyectos = [
  {
    id: 1,
    nombre: "E-LIBRARY",
    descripcion: "Plataforma de biblioteca virtual.",
    enlace: "https://github.com/Simonvasquez0811/repaso"
  },
  {
    id: 2,
    nombre: "API",
    descripcion: "API .",
    enlace: "https://github.com/Simonvasquez0811/API-1"
  }
];

export const habilidades = [
  { id: 1, nombre: "Comunicación", nivel: "Avanzado" },
  { id: 2, nombre: "Trabajo en Equipo", nivel: "Intermedio" },
  { id: 3, nombre: "Resolución de Problemas", nivel: "Avanzado" },
  {id: 4, nombre:"Ingles",nivel:"Intermedio 2"}
];
