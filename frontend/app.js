const apiUrl = "http://35.175.142.63:3000/api/estudiantes";

const tbody = document.querySelector("tbody");

function loadStudents() {
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      tbody.innerHTML = "";
      data.forEach(est => {
        const row = `<tr>
          <td>${est.nombre}</td>
          <td>${est.direccion}</td>
          <td>${est.ciudad}</td>
          <td>${est.estado}</td>
          <td>${est.email}</td>
          <td>${est.telefono}</td>
        </tr>`;
        tbody.innerHTML += row;
      });
    });
}

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const estudiante = {
    nombre: document.getElementById("name").value,
    direccion: document.getElementById("direccion").value,
    ciudad: document.getElementById("ciudad").value,
    estado: document.getElementById("estado").value,
    email: document.getElementById("email").value,
    telefono: document.getElementById("telefono").value,
  };

  fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(estudiante)
  }).then(() => {
    loadStudents();
    document.querySelector("form").reset();
  });
});

function showForm() {
  document.getElementById("form").style.display = "block";
}

loadStudents();
