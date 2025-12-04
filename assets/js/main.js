document.addEventListener("DOMContentLoaded", () => {
    const heroImg = document.getElementById("hero-image");
    const images = JSON.parse(heroImg.dataset.images);
    let index = 0;

    setInterval(() => {
        index = (index + 1) % images.length;

        // Fade out
        heroImg.style.opacity = 0;

        setTimeout(() => {
            heroImg.src = images[index];
            // Fade in
            heroImg.style.opacity = 1;
        }, 50); // fade timing
    }, 2000); // time between switches
});
