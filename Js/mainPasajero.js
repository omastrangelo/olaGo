// Lógica para renderizar los últimos viajes agregados con info hardcodeada ------------------------

const viajesContainer = document.getElementById("viajes-container");

async function cargarYRenderizarViajes() {
  try {
    //me traigo todos los datos harcodeados del json
    const response = await fetch("../public/data/viajes.json");
    //guardamos en una variable los viajes con la data del json
    const viajes = await response.json();

    //para tenerlo en cuenta después, en este caso ya sabemos que temos info hardcodeada
    if (viajes.length === 0) {
      viajesContainer.innerHTML = "<p>No hay viajes disponibles por el momento.</p>";
      return;
    }

    //el conteiner de los viajes y mapeamos el json, por cada uno creamos una card de viaje
    viajesContainer.innerHTML = viajes
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
                <p>Nombre de quien conduce: ${viaje.conductor}</p>
                <p>Contacto: ${viaje.contacto || 'No informado'}</p>
                <p>Puntaje en base a reseñas</p>
                </div>
                <div class="viaje-precio">
                <p><strong>$${viaje.precio.toLocaleString("es-AR")}</strong></p>
                <button class="btn-asiento">Solicitar asiento</button>
                </div>
            </div>
        </div>
      `
      )
      .join("");
  } catch (error) {
    console.error("Error al cargar los viajes:", error);
    viajesContainer.innerHTML = "<p>Ocurrió un error al cargar los viajes.</p>";
  }
}

// Al cargarse la pag se ejecuta la fn
cargarYRenderizarViajes();
