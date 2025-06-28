const form = document.getElementById("formEditar");

if (!form) {
  console.error("No se encontró el formulario");
  // No uses return fuera de función
} else {
  const id = parseInt(localStorage.getItem("idViajeEditar"));
  if (!id) {
    alert("No se encontró el viaje a editar.");
    window.location.href = "./index.html";
  }

  let viajes = JSON.parse(localStorage.getItem("viajes")) || [];
  const viaje = viajes.find((v) => v.id === id);

  if (!viaje) {
    alert("Viaje no encontrado.");
    window.location.href = "./index.html";
  }

  const campos = ["origen", "destino", "fecha", "hora", "asientos", "conductor", "contacto", "precio"];

  campos.forEach((campo) => {
    form[campo].value = viaje[campo];
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    Swal.fire({
      title: '¿Querés cambiar el contenido del viaje?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, cambiar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true,
      customClass: {
        confirmButton: 'btn-confirmar-personalizado'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        campos.forEach((campo) => {
          viaje[campo] = form[campo].type === "number"
            ? parseFloat(form[campo].value)
            : form[campo].value;
        });

        const index = viajes.findIndex((v) => v.id === id);
        viajes[index] = viaje;

        localStorage.setItem("viajes", JSON.stringify(viajes));

        Swal.fire({
          title: '¡Listo!',
          text: 'El viaje fue actualizado correctamente.',
          icon: 'success',
          confirmButtonText: 'Volver',
          customClass: {
            confirmButton: 'mi-boton-personalizado'
          },
          buttonsStyling: false
        }).then(() => {
          window.location.href = "./soyConductor.html";
        });
      }
    }
  )
}

)
}

const btnVolver = document.getElementById("btnVolver");

btnVolver.addEventListener("click", () => {
  window.location.href = "./soyConductor.html";
});
