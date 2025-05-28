export default function Experiencia() {
  const experiencia = [
    { id: 1, puesto: "Desarrollador Full Stack", empresa: "Navisoft Gaming", periodo: "2022-2024", descripcion: "Desarrollo de aplicaciones web y móviles utilizando tecnologías modernas." },
    { id: 2, puesto: "Instructor TIC", empresa: "SENA", periodo: "2020-2022", descripcion: "Enseñanza de tecnologías de la información y comunicación a estudiantes." },
    {id: 3, puesto: "Hacker", empresa: "Anonymous", periodo: "2018-2020", descripcion: "Participación en proyectos de ciberseguridad y hacking ético." },
    { id: 4, puesto: "Desarrollador Web", empresa: "Tech Solutions", periodo: "2016-2018", descripcion: "Desarrollo de sitios web y aplicaciones utilizando HTML, CSS y JavaScript." },
    { id: 5, puesto: "Analista de Sistemas", empresa: "Innovatech", periodo: "2014-2016", descripcion: "Análisis y diseño de sistemas para mejorar procesos empresariales." },
    { id: 6, puesto: "Soporte Técnico", empresa: "Global IT", periodo: "2012-2014", descripcion: "Atención y resolución de problemas técnicos para clientes." },
    { id: 7, puesto: "Practicante de Desarrollo", empresa: "StartUp Inc.", periodo: "2010-2012", descripcion: "Asistencia en el desarrollo de software y aplicaciones móviles." },
    { id: 8, puesto: "Asistente de Proyectos", empresa: "TechCorp", periodo: "2008-2010", descripcion: "Apoyo en la gestión y ejecución de proyectos tecnológicos." },
    { id: 9, puesto: "Consultor IT", empresa: "Digital Solutions", periodo: "2006-2008", descripcion: "Asesoramiento en soluciones tecnológicas para empresas." },
    { id: 10, puesto: "Gerente de Proyectos", empresa: "Future Tech", periodo: "2004-2006", descripcion: "Gestión de proyectos tecnológicos y coordinación de equipos." },

  ];

  // Renderiza condicionalmente si no hay experiencia
  if (experiencia.length === 0) {
    return (
      <section>
        <h3>Experiencia Profesional</h3>
        <p>No se ha registrado experiencia profesional.</p>
      </section>
    );
  }

  return (
    <section>
      <h3>Experiencia Profesional</h3>
      <ul>
        {experiencia.map((exp) => (
          <li key={exp.id}>
            <strong>{exp.puesto}</strong> - {exp.empresa} ({exp.periodo} - {exp.descripcion})
          </li>
        ))}
      </ul>
    </section>
  );
}