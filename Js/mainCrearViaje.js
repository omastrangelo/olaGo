const form = document.getElementById("formCrear");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Validación básica
  if (
    !form.origen.value ||
    !form.destino.value ||
    !form.fecha.value ||
    !form.hora.value ||
    !form.asientos.value ||
    !form.contacto.value ||
    !form.precio.value ||
    !form.terminos.checked
  ) {
    Swal.fire({
      icon: "warning",
      title: "Campos incompletos",
      text: "Por favor completá todos los campos.",
      confirmButtonColor: "#F37335"
    });
    return;
  }

  // Confirmación previa
  Swal.fire({
    title: "¿Crear este viaje?",
    text: "Una vez creado, aparecerá en el listado de viajes.",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Sí, crear",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#F37335",
    cancelButtonColor: "#888"
  }).then((result) => {
    if (result.isConfirmed) {
      // Obtener viajes existentes
      let viajes = JSON.parse(localStorage.getItem("viajes")) || [];

      // Crear nuevo ID
      const nuevoId = viajes.length > 0
        ? Math.max(...viajes.map(v => v.id)) + 1
        : 1;

      // Crear nuevo viaje
      const nuevoViaje = {
        id: nuevoId,
        origen: form.origen.value,
        destino: form.destino.value,
        fecha: form.fecha.value,
        hora: form.hora.value,
        asientos: parseInt(form.asientos.value),
        conductor: form.conductor.value,
        contacto: form.contacto.value,
        precio: parseFloat(form.precio.value)
      };

      // Guardar en localStorage
      viajes.push(nuevoViaje);
      localStorage.setItem("viajes", JSON.stringify(viajes));

      // Éxito
      Swal.fire({
        icon: "success",
        title: "¡Viaje creado!",
        text: "El viaje fue agregado correctamente.",
        confirmButtonColor: "#F37335"
      }).then(() => {
        window.location.href = "./soyConductor.html"; // o tu página de viajes
      });

    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // Cancelado por el usuario
      Swal.fire({
        icon: "info",
        title: "Cancelado",
        text: "No se creó ningún viaje.",
        timer: 2000,
        showConfirmButton: false
      });
    }
  });
});