document.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    document.querySelectorAll(".parallax-background").forEach(function (background) {
        const speed = background.getAttribute("data-speed");
        background.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});