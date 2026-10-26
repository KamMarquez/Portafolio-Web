const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();

  respuesta.textContent = "¡Gracias, " + nombre + "! Pronto me pondré en contacto contigo.";


  formulario.reset();
});