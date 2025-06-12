document.getElementById('formContacto').addEventListener('submit', function(e) {
  e.preventDefault();

  let email = document.getElementById('email').value;
  let mensaje = document.getElementById('mensaje').value;

  if (!email.includes("@") || mensaje.trim() === "") {
    alert("Ingresa un correo válido y un mensaje.");
    return;
  }

  let datos = {
    tipo: "contacto",
    email: email,
    mensaje: mensaje
  };

  sessionStorage.setItem("datosForm", JSON.stringify(datos));
  window.location.href = "confirm.html";
});