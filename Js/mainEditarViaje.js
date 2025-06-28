const viajeAEditar = document.getElementById("viaje-editar");

async function cargarYRenderizarViajeEditar() {
    try {
        let viajes = JSON.parse(localStorage.getItem("viajes"));
        // Si no hay viajes guardados, cargamos del JSON y los guardamos
        if (!viajes || !Array.isArray(viajes) || viajes.length === 0) {
            const response = await fetch("../public/data/viajes.json");
            viajes = await response.json();
            localStorage.setItem("viajes", JSON.stringify(viajes));
        }
        /* if (viajes.length === 0) {
            viajesConductor.innerHTML = "<p>No tenés viajes publicados por el momento.</p>";
            return;
        } */

        // Renderizamos
        viajeAEditar.innerHTML = viajes
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
                   <div class="container-btnConductor">
                   <button class="btn-asiento">Guardar</button>
                   </div>
                   </div>
                 </div>
                </div>
            `
            )
            .join("");
    } catch (error) {
        console.error("Error al cargar el viaje:", error);
        viajeAEditar.innerHTML = "<p>Ocurrió un error al cargar el viaje.</p>";
    }
}

// Al cargar la página renderiza las cards
cargarYRenderizarViajeEditar();