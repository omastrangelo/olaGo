
// fn para iniciar card de compartir viaje -------------------

const btnPasajero = document.getElementById("btnPasajero");
const btnConductor = document.getElementById("btnConductor");
const contenedorContenidoDinamico = document.getElementById("contenedorContenidoDinamico");

function renderizarPasajero() {
  contenedorContenidoDinamico.innerHTML = `
    <div class="tarjetaContenido tarjetaPasajero">
      <div class="contenedorPasos">
        <div class="columnaPasos">
          <div class="paso">
            <i class="icono">📍</i>
            <h3>1. Origen y destino</h3>
            <p>Escribí tu origen y/o destino en el buscador para encontrar los viajes que coincidan con tu búsqueda.</p>
          </div>
          <div class="paso">
            <i class="icono">🕒</i>
            <h3>2. Fecha</h3>
            <p>Seleccioná la fecha de salida para tu viaje.</p>
          </div>
        </div>
        
        <div class="imagenCentro">
          <img src="./img/CompartirViajeCard.png" alt="Ilustración de pasajero"/>
        </div>
        
        <div class="columnaPasos">
          <div class="paso">
            <i class="icono">👥</i>
            <h3>3. Elegí un viaje</h3>
            <p>Explorá los viajes disponibles y conocé los detalles de cada uno para elegir cuál se adapta mejor a tus preferencias.</p>
          </div>
          <div class="paso">
            <i class="icono">🙌🏼</i>
            <h3>4. Solicitá un asiento</h3>
            <p>Elegí el viaje y enviá una solicitud de asiento al conductor. Cuando lo acepte, tu lugar estará reservado.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderizarConductor() {
  contenedorContenidoDinamico.innerHTML = `
    <div class="tarjetaContenido tarjetaConductor">
      <div class="contenedorPasos">
        <div class="columnaPasos">
          <div class="paso">
            <i class="icono">📍</i>
            <h3>1. Cargá los datos de tu viaje</h3>
            <p>Indicá desde dónde y hacia dónde vas a viajar.</p>
          </div>
          <div class="paso">
            <i class="icono">🕒</i>
            <h3>2. Especificá detalles</h3>
            <p>Brinda toda la información sobre tu salida, cuanto más especifiques mejor</p>
          </div>
        </div>
        
        <div class="imagenCentro">
          <img src="./img/CompartirViajeCard2.png" alt="Ilustración de conductor" style="max-width: 300px; height: auto;"/>
        </div>
        
        <div class="columnaPasos">
          <div class="paso">
            <i class="icono">👥</i>
            <h3>3. Asientos disponibles</h3>
            <p>Indicá cuántos asientos tienes disponibles en tu vehículo.</p>
          </div>
          <div class="paso">
            <i class="icono">🚀</i>
            <h3>4. Publicá tu viaje</h3>
            <p>Completá todos los detalles y publicá tu viaje para que los pasajeros puedan encontrarlo.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}


// --------------------------------------------------



// todos los eventos que tengamos ---------------


btnPasajero.addEventListener("click", () => {
  btnPasajero.classList.add("activo");
  btnConductor.classList.remove("activo");
  renderizarPasajero();
});

btnConductor.addEventListener("click", () => {
  btnConductor.classList.add("activo");
  btnPasajero.classList.remove("activo");
  renderizarConductor();
});






// todos los iniciadores que tengamos -------------------
renderizarPasajero();