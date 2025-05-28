export default function StackTecnologias() {
  const tecnologias = [
    { id: 1, nombre: "React", tipo: "frontend" },
    { id: 2, nombre: "Node.js", tipo: "backend" },
    { id: 3, nombre: "JavaScript", tipo: "frontend" },
    { id: 4, nombre: "PostgreSQL", tipo: "base de datos" },
    { id: 5, nombre: "CSS", tipo: "frontend" }
  ];

  return (
    <section>
      <h3>Stack de Tecnologías</h3>
      <ul>
        {tecnologias.map((tech) => (
          <li
            key={tech.id}
            style={{
              color:
                tech.tipo === "frontend"
                  ? "blue"
                  : tech.tipo === "backend"
                  ? "green"
                  : tech.tipo === "base de datos"
                  ? "orange"
                  : "gray"
            }}
          >
            {tech.nombre} - <em>{tech.tipo}</em>
          </li>
        ))}
      </ul>
    </section>
  );
}
