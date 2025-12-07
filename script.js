const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;
let imageWidth;

function updateSize() {
    imageWidth = images[0].clientWidth;
    carousel.style.transform = `translateX(${-index * imageWidth}px)`;
}

window.addEventListener("resize", updateSize);
window.addEventListener("load", updateSize);

function updateCarousel() {
    carousel.style.transform = `translateX(${-index * imageWidth}px)`;
}

next.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateCarousel();
});

prev.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
});

function calcularTempo() {
    const data = new Date("2024-03-02T00:00:00");
    const agora = new Date();
    const diff = agora - data;

    let anos = agora.getFullYear() - data.getFullYear();
    let meses = agora.getMonth() - data.getMonth();
    let dias = agora.getDate() - data.getDate();

    if (dias < 0) { meses--; dias += new Date(agora.getFullYear(), agora.getMonth(), 0).getDate(); }
    if (meses < 0) { anos--; meses += 12; }

    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    const format = (valor, singular, plural) =>
        `${valor} ${valor === 1 ? singular : plural}`;

    document.getElementById("contador").textContent =
        `${format(anos, "ano", "anos")}, ` +
        `${format(meses, "mês", "meses")}, ` +
        `${format(dias, "dia", "dias")}, ` +
        `${format(horas, "hora", "horas")}, ` +
        `${format(minutos, "minuto", "minutos")} e ` +
        `${format(segundos, "segundo", "segundos")} ❤️`;
}

setInterval(calcularTempo, 1000);
calcularTempo();


const loveBtn = document.getElementById("loveBtn");
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    
    const emojis = ["❤️","💗","💖","💘","💕","💞"];
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 2200);
}

loveBtn.addEventListener("click", () => {
    for (let i = 0; i < 12; i++) {
        setTimeout(createHeart, i * 120);
    }
});



