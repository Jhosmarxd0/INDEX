document.getElementById('formLogin').addEventListener('submit', function(e) {
  e.preventDefault();

  let user = document.getElementById('usuario').value;
  let pass = document.getElementById('clave').value;

  if (user === "usuario1" && pass === "123") {
    window.location.href = "home.html";
  } else {
    document.getElementById('errorLogin').innerText = "Usuario o contraseña incorrectos";
  }
});