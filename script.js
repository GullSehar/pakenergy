document.addEventListener("DOMContentLoaded", () => {
        const slides = document.querySelectorAll(".slide");
        const dots = document.querySelectorAll(".dot");
        const prevButton = document.querySelector(".prev");
        const nextButton = document.querySelector(".next");
        let currentSlide = 0;

        // Show the current slide
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove("active");
                dots[i].classList.remove("active");
                if (i === index) {
                    slide.classList.add("active");
                    dots[i].classList.add("active");
                }
            });
        }

        // Automatically switch slides
        function autoSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        // Set interval for auto-sliding
        const slideInterval = setInterval(autoSlide, 5000);

        // Dots navigation
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                clearInterval(slideInterval); // Stop auto-sliding on manual navigation
                currentSlide = index;
                showSlide(currentSlide);
            });
        });

        // Navigation buttons functionality
        prevButton.addEventListener("click", () => {
            clearInterval(slideInterval);
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        nextButton.addEventListener("click", () => {
            clearInterval(slideInterval);
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        // Initialize the first slide
        showSlide(currentSlide);
    });