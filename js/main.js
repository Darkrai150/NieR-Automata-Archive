// =========================================================
// SLIDER DE PERSONAJES
// =========================================================

const slider = document.querySelector('.characters-slider');

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

if (slider && nextBtn && prevBtn) {

    nextBtn.addEventListener('click', () => {

        slider.scrollBy({
            left: 380,
            behavior: 'smooth'
        });

    });

    prevBtn.addEventListener('click', () => {

        slider.scrollBy({
            left: -380,
            behavior: 'smooth'
        });

    });

}