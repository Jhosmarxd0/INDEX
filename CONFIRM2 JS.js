let datos = JSON.parse(sessionStorage.getItem("datosForm"));

let contenedor = document.getElementById('resultado');

if (!datos) {
  contenedor.innerHTML = "<p>No hay datos disponibles.</p>";
} else {
  let html = "<ul>";
  for (let key in datos) {
    html += <li><strong>${key}</strong>: ${datos[key]}</li>;
  }
  html += "</ul>";

  contenedor.innerHTML = html;
}