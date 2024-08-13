document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hero, .about, .slot");

    const revealOnScroll = () => {
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const viewHeight = window.innerHeight - 100;

            if (elementPosition < viewHeight) {
                element.classList.add("reveal");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 
});

document.addEventListener("DOMContentLoaded", function () {
    const carouselContent = document.querySelector(".carousel-content");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    let scrollPosition = 0;

    rightArrow.addEventListener("click", function () {
        const cardWidth = document.querySelector(".profile-card").offsetWidth + 20; 
        scrollPosition -= cardWidth;
        carouselContent.style.transform = `translateX(${scrollPosition}px)`;
    });

    leftArrow.addEventListener("click", function () {
        const cardWidth = document.querySelector(".profile-card").offsetWidth + 20;
        scrollPosition += cardWidth;
        carouselContent.style.transform = `translateX(${scrollPosition}px)`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".profile-card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            if (card.classList.contains("expanded-card")) {
                card.classList.remove("expanded-card");
                document.body.style.overflow = "auto";
            } else {   
                cards.forEach(c => c.classList.remove("expanded-card"));
                card.classList.add("expanded-card");
                document.body.style.overflow = "hidden"; 
            }
        });
    });
});
