// Lógica para renderizar los últimos viajes agregados con info hardcodeada ------------------------

const viajesConductor = document.getElementById("viajes-conductor");

async function cargarYRenderizarViajes() {
    try {
        //me traigo todos los datos harcodeados del json
        const response = await fetch("../public/data/viajes.json");
        //guardamos en una variable los viajes con la data del json
        const viajes = await response.json();

        //para tenerlo en cuenta después, en este caso ya sabemos que temos info hardcodeada
        if (viajes.length === 0) {
            viajesConductor.innerHTML = "<p>No tenés viajes publicados por el momento.</p>";
            return;
        }

        //el conteiner de los viajes y mapeamos el json, por cada uno creamos una card de viaje
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
                   <button class="btn-asiento">Editar viaje</button>
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

// Al cargarse la pag se ejecuta la fn
cargarYRenderizarViajes();