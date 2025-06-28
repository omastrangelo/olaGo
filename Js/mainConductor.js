// Lógica para renderizar los viajes hardcodeados ------------------------

const viajesConductor = document.getElementById("viajes-conductor");

async function cargarYRenderizarViajes() {
    try {
        let viajes = JSON.parse(localStorage.getItem("viajes"));
        // Si no hay viajes guardados, cargamos del JSON y los guardamos
        if (!viajes || !Array.isArray(viajes) || viajes.length === 0) {
    const response = await fetch("../public/data/viajes.json");
    viajes = await response.json();
    localStorage.setItem("viajes", JSON.stringify(viajes));
}
        if (viajes.length === 0) {
            viajesConductor.innerHTML = "<p>No tenés viajes publicados por el momento.</p>";
            return;
        }

        // Renderizamos
        viajesConductor.innerHTML = viajes
            .map(
                (viaje) => `
                <div class="viaje-card">
                 <div class="viaje-header">
                  <h3>${viaje.origen} - ${viaje.destino}</h3>
                 </div>
                 <div class="viaje-body">
                  <div class="viaje-info">
                   <p class="viaje-fecha">${viaje.fecha}</p>
                   <p class="viaje-hora">${viaje.hora}</p>
                   </div>
                   <div class="viaje-detalles">
                   <p>Asientos disponibles: ${viaje.asientos}</p>
                   </div>
                   <div class="viaje-precio">
                    <p><strong>$${viaje.precio.toLocaleString("es-AR")}</strong></p>
                    </div>
                   <div class="container-btnConductor">
                   <button class="btn-editar" data-id="${viaje.id}">Editar viaje</button>
                   <button class="btn-eliminar" onclick="eliminarViaje(${viaje.id})">Eliminar viaje</button>
                   </div>
                   </div>
                 </div>
                </div>
            `
            )
            .join("");
    } catch (error) {
        console.error("Error al cargar los viajes:", error);
        viajesConductor.innerHTML = "<p>Ocurrió un error al cargar los viajes.</p>";
    }
}

// Al cargar la página renderiza las cards
cargarYRenderizarViajes();

// Eliminar viaje
function eliminarViaje(id) { //Se recibe el id del viaje a eliminar
  let viajes = JSON.parse(localStorage.getItem("viajes")) || []; //Se trae el array desde localStorage
  viajes = viajes.filter(v => v.id !== id); //Se filtra el array para eliminar el viaje con ese id
  localStorage.setItem("viajes", JSON.stringify(viajes)); //Se guarda el nuevo array en localStorage
  cargarYRenderizarViajes(); //Se vuelve a llamar a cargarYRenderizarViajes() para actualizar la vista
}
// Editar Viajes
viajesConductor.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-editar")) {
      const id = e.target.dataset.id;
      localStorage.setItem("idViajeEditar", id);
      window.location.href = "./editarViaje.html";
    }
  });