import "./cabecera.css";

const user = {
  nombre: "Simon Vasquez Escobar",
  Cargo: "Desarrollador Front-End Jr",
  correo: "simonvasquez550@gmail.com",
  ubicacion: "Medellín",
  telefono: "300 123 4567",
};

export default function CabeceraCV() {
  return (
    <header>
      <h1>{user.nombre}</h1>
      <h2>{user.Cargo}</h2>
      <p>Correo: {user.correo}</p>
      <p>Ubicación: {user.ubicacion}</p>
      <p>Teléfono: {user.telefono}</p>
    </header>
  );
}
