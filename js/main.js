// ======================================================
// BUSCADOR DE PERSONAJES
// Filtra las tarjetas según el texto ingresado
// ======================================================

// Input de búsqueda
const searchInput = document.querySelector(".search-box input");

// Todas las tarjetas
const cards = document.querySelectorAll(".info-card");

// Evento al escribir
searchInput.addEventListener("input", () => {

    // Texto escrito en minúsculas
    const searchText = searchInput.value.toLowerCase();

    // Recorremos cada tarjeta
    cards.forEach(card => {

        // Texto completo de la card
        const cardText = card.textContent.toLowerCase();

        // Si coincide, mostrar
        if (cardText.includes(searchText)) {

            card.style.display = "block";

        }

        // Si no coincide, ocultar
        else {

            card.style.display = "none";

        }

    });

});