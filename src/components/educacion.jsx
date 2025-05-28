export default function Educacion() {
  const educacion = [
    { id: 1, titulo: "Ingeniería en Sistemas", instituto: "Universidad Nacional", periodo: "2018-2022" },
    {id: 2, titulo: " Tecnico en Programacion de Software", instituto: "SENA", periodo: "2023-2024" },
    {id: 3, titulo: "Comportamiento Emprendedor", instituto: "SENA", periodo: "2022-2022" },
    {id: 4, titulo: "Desarrollo de Aplicaciones Móviles", instituto: "Platzi", periodo: "2023-2023" },
    {id: 5, titulo: "Curso de React", instituto: "FreeCodeCamp", periodo: "2023-2023" }
  ];

  if (educacion.length === 0) {
    return (
      <section>
        <h3>Educación</h3>
        <p>No se ha registrado educación.</p>
      </section>
    );
  }

  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {educacion.map((edu) => (
          <li key={edu.id}>
            <strong>{edu.titulo}</strong> - {edu.instituto} ({edu.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}