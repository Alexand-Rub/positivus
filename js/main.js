document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");
    
    accordions.forEach((el) => {
      el.addEventListener("click", (event) => {

        const self = event.currentTarget;        
        const control = self.querySelector(".accordion__control");
        const content = self.querySelector(".accordion__content");
        
        self.classList.toggle("open");
        
        if (self.classList.contains("open")) {
        accordions.forEach((elem) => {
            elem.classList.remove('open');
        });
        document.querySelectorAll(".accordion__control").forEach((el) => {
            el.setAttribute("aria-expanded", false);
        });
        document.querySelectorAll(".accordion__content").forEach((el) => {
            el.setAttribute("aria-hidden", true);
            el.style.maxHeight = '0px';
        });
        self.classList.toggle("open");
        control.setAttribute("aria-expanded", true);
        content.setAttribute("aria-hidden", false);
        content.style.maxHeight = content.scrollHeight + "px";
        } else {
            control.setAttribute("aria-expanded", false);
            content.setAttribute("aria-hidden", true);
            content.style.maxHeight = null;

        }
      });
    });


    gsap.from(".hero-title", { x: -100, opacity: 0 });
    gsap.from(".hero-subtitle", { x: -100, opacity: 0, duration: 0.8 });
    gsap.from(".hero-button", { x: -100, opacity: 0, duration: 1 });

    gsap.from(".hero-partner", {
        scrollTrigger: {
            trigger: ".hero-partners",
            start: "top 60%",
            toggleActions: "play none none none"
        }, 
        x: -100, opacity: 0, stagger: 0.15
    });

    gsap.from(".services-card", {
        scrollTrigger: {
            trigger: ".services",
            start: "top 60%",
            toggleActions: "play none none none"
        }, 
        x: -100, opacity: 0, stagger: 0.15
    });

    gsap.from(".team-item", {
        scrollTrigger: {
            trigger: ".team",
            start: "top 60%",
            toggleActions: "play none none none"
        }, x: -100, opacity: 0, stagger: 0.15
    });
  
    gsap.from(".accordion", {
        scrollTrigger: {
            trigger: ".process",
            start: "top 50%",
            toggleActions: "play none none none"
        }, 
        x: -100, opacity: 0, stagger: 0.15
    });

    gsap.from(".сase-list", {
        scrollTrigger: {
            trigger: ".сase",
            start: "top 60%",
            toggleActions: "play none none none"
        }, 
        opacity: 0, stagger: 0.15
    });

    gsap.from(".swiper", {
        scrollTrigger: {
            trigger: ".swiper",
            start: "top 60%",
            toggleActions: "play none none none"
        }, 
        opacity: 0, stagger: 0.15
    });

    gsap.from(".сase-anim", {
        scrollTrigger: {
            trigger: ".сase",
            start: "top 60%",
            toggleActions: "play none none none"
        }, 
        y: -100, opacity: 0, stagger: 0.15
    });

    gsap.to('.contact-block', {
        '--image-rotation': '360deg',
        ease: 'none',
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            end: 'bottom top',
            scrub: true,
        }
    });

    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 1.2,
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonials-button-next',
            prevEl: '.testimonials-button-prev',
        },
        breakpoints: {
            1000: {
                slidesPerView: 2,
                spaceBetween: 100,
            },
            // 991: {
            //     slidesPerView: 2,
            //     spaceBetween: 40,
            // },
        }
    });

      // shadow in header after scrolling
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
        header.classList.add("scrolled");
        } else {
        header.classList.remove("scrolled");
        }
    });

    const burger = document.querySelector(".burger");
    const headerRight = document.querySelector(".header-nav");
    const navLinks = document.querySelectorAll(".header-link");

    burger.addEventListener("click", function () {
        burger.classList.toggle("active");
        headerRight.classList.toggle("active");
        document.body.classList.toggle("body-hidden");
    });

    // close nav on click link
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
        burger.classList.remove("active");
        headerRight.classList.remove("active");
        document.body.classList.remove("body-hidden");
        });
    });
});

