document.querySelectorAll('.karuzela').forEach(karuzela => {   // petla: osobno dla kazdej karuzeli
    const karty = karuzela.children;                            // karty to bezposrednie dzieci karuzeli
    const kreski = karuzela.parentElement.querySelectorAll('.kreska');  // kreski tylko z tej samej sekcji
    const odstep = parseFloat(getComputedStyle(karuzela).columnGap);    // czyta gap z CSS, nie trzeba wpisywac 16 recznie

    karuzela.addEventListener('scroll', () => {
        const krok = karty[0].offsetWidth + odstep;
        const index = Math.round(karuzela.scrollLeft / krok);

        kreski.forEach((kreska, i) => {
            kreska.classList.toggle('kreska-aktywna', i === index);
        });
    });
});

//menu

const menu = document.querySelector('.menu');
const otworz = document.querySelector('.menu-otworz');
const zamknij = document.querySelector('.menu-zamknij');
const linkiMenu = document.querySelectorAll('.menu-link');

function przelaczMenu(otwarte) {
    menu.classList.toggle('menu-otwarte', otwarte);              // dodaje/usuwa klase, CSS robi animacje
    document.body.classList.toggle('menu-aktywne', otwarte);     // blokada przewijania strony
}

otworz.addEventListener('click', () => przelaczMenu(true));
zamknij.addEventListener('click', () => przelaczMenu(false));
linkiMenu.forEach(link => link.addEventListener('click', () => przelaczMenu(false)));  // klik w link zamyka menu i przewija
