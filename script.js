document.addEventListener("DOMContentLoaded", () => {

    // ================================
    // PROJECT SLIDER
    // ================================
    const slides = document.querySelectorAll(".project-slide");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    if (!slides.length || !nextBtn || !prevBtn) return;

    let current = 0;
    const total = slides.length;

    // Detect active slide from HTML
    slides.forEach((slide, index) => {
        if (slide.classList.contains("active")) {
            current = index;
        }
    });

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove("active", "prev", "next");

            if (index === current) slide.classList.add("active");
            else if (index === (current - 1 + total) % total) slide.classList.add("prev");
            else if (index === (current + 1) % total) slide.classList.add("next");
        });
    }

    nextBtn.addEventListener("click", () => {
        current = (current + 1) % total;
        updateSlides();
    });

    prevBtn.addEventListener("click", () => {
        current = (current - 1 + total) % total;
        updateSlides();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") nextBtn.click();
        if (e.key === "ArrowLeft") prevBtn.click();
    });

    updateSlides();

    // ================================
    // SCROLL REVEAL
    // ================================
    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const offset = 120;

            if (elementTop < windowHeight - offset) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
