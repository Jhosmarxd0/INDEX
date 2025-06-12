document.getElementById('formDatos').addEventListener('submit', function(e) {
  e.preventDefault();

  let nombre = document.getElementById('nombre').value;
  let edad = parseInt(document.getElementById('edad').value);

  if (nombre.trim() === "" || isNaN(edad) || edad < 0) {
    alert("Completa todos los campos correctamente.");
    return;
  }

  let datos = {
    tipo: "personal",
    nombre: nombre,
    edad: edad
  };

  sessionStorage.setItem("datosForm", JSON.stringify(datos));
  window.location.href = "confirm.html";
});