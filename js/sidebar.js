/* =========================================================
   SIDEBAR — inyección directa sin fetch (compatible file://)
   ========================================================= */

(function () {

    const isSubpage = window.location.pathname.includes('/pages/');
    const base = isSubpage ? '../' : './';

    const sidebarHTML = `
        <aside class="sidebar">

            <div class="logo">
                <img src="${base}assets/images/logos/Logo.jpg" alt="YoRHa" class="logo-img" width="80px">
                <p>Archivo Clasificado</p>
            </div>

            <nav class="nav-menu">
                <ul>
                    <li><a href="${base}index.html">Inicio</a></li>
                    <li><a href="${base}pages/characters.html">Personajes</a></li>
                    <li><a href="${base}pages/weapons.html">Armas</a></li>
                    <li><a href="${base}pages/endings.html">Finales</a></li>
                    <li><a href="${base}pages/lore.html">Lore</a></li>
                    <li><a href="${base}pages/maps.html">Mapas</a></li>
                </ul>
            </nav>

        </aside>
    `;

    // Inyecta al inicio del contenedor
    const container = document.querySelector('.container');
    container.insertAdjacentHTML('afterbegin', sidebarHTML);

    // Marca el link activo según la página actual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) link.classList.add('active');
    });

})();