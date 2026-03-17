// Muestra la sección correcta y resalta la pestaña del menú (versión multi-página)
function showSection(id) {
    // No es necesario ocultar secciones porque cada página es independiente
    // Pero lo dejamos por si querés reutilizar en el futuro
    document.querySelectorAll('.nav-tab').forEach(el => el.classList.remove('active'));
    
    // Busca el link que apunta a la página actual (ej: "tablero.html")
    const currentLink = document.querySelector(`a[href="${id}.html"]`);
    if (currentLink) {
        currentLink.classList.add('active');
    }
}

// Expande/colapsa los detalles de las tarjetas de luces/instrumentos
function toggleDetail(card) {
    const details = card.querySelector('.light-details');
    if (details) {
        details.classList.toggle('show');
    }
}

// Muestra información detallada al hacer clic en una marcha (marchas.html)
function showGearInfo(gear) {
    const info = document.getElementById('gear-info');
    if (!info) return;  // Evita error si no existe el elemento

    let html = '';

    if (gear === 1) {
        html = '<h4>Primera marcha (1)</h4><p>La más fuerte y corta. Usala siempre para arrancar desde cero, en pendientes fuertes o cuando vas muy lento (menos de 15-20 km/h). El motor sube revoluciones rápido ("grita" fuerte). <strong>Tip de la profe:</strong> soltá el embrague muy despacio mientras acelerás suave para no ahogarlo ni que patine. Cambiá a 2ª entre 15-20 km/h.</p>';
    } else if (gear === 2) {
        html = '<h4>Segunda marcha (2)</h4><p>Buen empuje para ciudad, semáforos, curvas lentas o tráfico. Subí a 3ª entre 35-40 km/h. Sentirás que el auto "respira" mejor que en primera, pero aún tiene fuerza. Ideal para salir de rotondas o subir lomas suaves.</p>';
    } else if (gear === 3) {
        html = '<h4>Tercera marcha (3)</h4><p>La más versátil en ciudad. Equilibrio perfecto entre fuerza y velocidad. Usala mucho entre 40-60 km/h. Cambiá a 4ª alrededor de 55-65 km/h. El motor suena relajado pero responde bien si pisás.</p>';
    } else if (gear === 4) {
        html = '<h4>Cuarta marcha (4)</h4><p>Para avenidas rápidas, rutas o cuando ya vas a buena velocidad. Más económica en nafta. El motor va más bajo de revoluciones (suave y silencioso). Usala desde ~60 km/h en adelante. Ideal para mantener 60-90 km/h sin forzar.</p>';
    } else if (gear === 5) {
        html = '<h4>Quinta marcha (5)</h4><p>Solo para rutas y autopistas (>80-90 km/h). La más larga y económica: el motor ronronea bajito, ahorra nafta en viajes largos. No la uses en ciudad ni subidas, porque pierde fuerza. Cambiala cuando estés estable en alta velocidad.</p>';
    } else if (gear === 'R') {
        html = '<h4>Reversa (R)</h4><p>Para retroceder. Levantá el anillo/collarín de seguridad en la palanca (o empujá hacia abajo según tu Ka) y meté hacia abajo a la derecha. Siempre mirá por atrás + espejos retrovisores. Acelerá muy suave porque la reversa es fuerte y puede mover el auto rápido.</p>';
    }

    info.innerHTML = html;
}