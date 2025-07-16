/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#49698a"
      },
      "shape": {
        "type": "triangle",
        "stroke": {
          "width": 0,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 0.5,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 70,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#49698a",
        "opacity": 0.3,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 600,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

/*Animation heading*/
gsap.from('.heading__line-1', { x:-100, duration: 2, opacity: 0, delay: .7})
gsap.from('.heading__line-2', { x:100, duration: 2, opacity: 0, delay: .7})

gsap.from('.profile', {
  scrollTrigger: '.profile', 
  x:-100, duration: 2, opacity: 0, delay: .7});
gsap.from('.skills', {
  scrollTrigger: '.profile', 
  x:100, duration: 2, opacity: 0, delay: .7});
gsap.from('.about__heading', {
  scrollTrigger: '.profile', 
  y:-100, duration: 2, opacity: 0, delay: 0.7});

/*Project header*/
gsap.from('.projects__heading', {
  scrollTrigger: '.projects__heading', 
  y:-100, duration: 2, opacity: 0, delay: 0.7});

/*Projects*/
gsap.from('.weather', {
  scrollTrigger: '.weather', 
  x:-100, duration: 2, opacity: 0, delay: 0.9});

gsap.from('.weather-title', {
  scrollTrigger: '.weather-title', 
  x:100, duration: 2, opacity: 0, delay: 1});
gsap.from('.weather-desc', {
  scrollTrigger: '.weather-desc', 
  x:100, duration: 2, opacity: 0, delay: 1.2});
gsap.from('.weather-btn', {
  scrollTrigger: '.weather-btn', 
  x:100, duration: 2, opacity: 0, delay: 1.4});
//
gsap.from('.quote', {
  scrollTrigger: '.quote', 
  x:100, duration: 2, opacity: 0, delay: 0.9});
  
gsap.from('.quote-title', {
  scrollTrigger: '.quote-title', 
  x:-100, duration: 2, opacity: 0, delay: 1});
gsap.from('.quote-desc', {
  scrollTrigger: '.quote-desc', 
  x:-100, duration: 2, opacity: 0, delay: 1.2});
gsap.from('.quote-btn', {
  scrollTrigger: '.quote-btn', 
  x:-100, duration: 2, opacity: 0, delay: 1.4});
//
gsap.from('.christmas', {
  scrollTrigger: '.christmas', 
  x:-100, duration: 2, opacity: 0, delay: 0.9});
  
gsap.from('.christmas-title', {
  scrollTrigger: '.christmas-title', 
  x:100, duration: 2, opacity: 0, delay: 1});
gsap.from('.christmas-desc', {
  scrollTrigger: '.christmas-desc', 
  x:100, duration: 2, opacity: 0, delay: 1.2});
gsap.from('.christmas-btn', {
  scrollTrigger: '.christmas-btn', 
  x:100, duration: 2, opacity: 0, delay: 1.4});
//
gsap.from('.bill', {
  scrollTrigger: '.bill', 
  x:100, duration: 2, opacity: 0, delay: 0.9});
  
gsap.from('.bill-title', {
  scrollTrigger: '.bill-title', 
  x:-100, duration: 2, opacity: 0, delay: 1});
gsap.from('.bill-desc', {
  scrollTrigger: '.bill-desc', 
  x:-100, duration: 2, opacity: 0, delay: 1.2});
gsap.from('.bill-btn', {
  scrollTrigger: '.bill-btn', 
  x:-100, duration: 2, opacity: 0, delay: 1.4});  
//
gsap.from('.restaurant', {
  scrollTrigger: '.restaurant', 
  x:-100, duration: 2, opacity: 0, delay: 0.9});
  
gsap.from('.restaurant-title', {
  scrollTrigger: '.restaurant-title', 
  x:100, duration: 2, opacity: 0, delay: 1});
gsap.from('.restaurant-desc', {
  scrollTrigger: '.restaurant-desc', 
  x:100, duration: 2, opacity: 0, delay: 1.2});
gsap.from('.restaurant-btn', {
  scrollTrigger: '.restaurant-btn', 
  x:100, duration: 2, opacity: 0, delay: 1.4});
//
gsap.from('.workout', {
  scrollTrigger: '.workout', 
  x:100, duration: 2, opacity: 0, delay: 0.9});
  
gsap.from('.workout-title', {
  scrollTrigger: '.workout-title', 
  x:-100, duration: 2, opacity: 0, delay: 1});
gsap.from('.workout-desc', {
  scrollTrigger: '.workout-desc', 
  x:-100, duration: 2, opacity: 0, delay: 1.2});
gsap.from('.workout-btn', {
  scrollTrigger: '.workout-btn', 
  x:-100, duration: 2, opacity: 0, delay: 1.4}); 
//
gsap.from('.trip', {
  scrollTrigger: '.trip', 
  x:-100, duration: 2, opacity: 0, delay: 0.9});
  
gsap.from('.trip-title', {
  scrollTrigger: '.trip-title', 
  x:100, duration: 2, opacity: 0, delay: 1});
gsap.from('.trip-desc', {
  scrollTrigger: '.trip-desc', 
  x:100, duration: 2, opacity: 0, delay: 1.2});
gsap.from('.trip-btn', {
  scrollTrigger: '.trip-btn', 
  x:100, duration: 2, opacity: 0, delay: 1.4});
//
gsap.from('.jewerly', {
  scrollTrigger: '.jewerly-btn', 
  x:100, duration: 2, opacity: 0, delay: 0.9});
  
gsap.from('.jewerly-title', {
  scrollTrigger: '.jewerly-title', 
  x:-100, duration: 2, opacity: 0, delay: 1});
gsap.from('.jewerly-desc', {
  scrollTrigger: '.jewerly-desc', 
  x:-100, duration: 2, opacity: 0, delay: 1.2});
gsap.from('.jewerly-btn', {
  scrollTrigger: '.jewerly-btn', 
  x:-100, duration: 2, opacity: 0, delay: 1.4}); 

gsap.from('.nutrition-title', {
  scrollTrigger: '.nutrition-title', 
  x:-100, duration: 2, opacity: 0, delay: 1});
gsap.from('.nutrition-desc', {
  scrollTrigger: '.nutrition-desc', 
  x:-100, duration: 2, opacity: 0, delay: 1.2});
gsap.from('.nutrition-btn', {
  scrollTrigger: '.nutrition-btn', 
  x:-100, duration: 2, opacity: 0, delay: 1.4}); 
//
/*Contact header*/
gsap.from('.contact__heading', {
  scrollTrigger: '.contact__heading', 
  y:-100, duration: 2, opacity: 0, delay: 0.7});
/*Contact fields*/
gsap.from('#contact-image', {
  scrollTrigger: '#contact-image', 
  x:-100, duration: 2, opacity: 0, delay: 0.7});
gsap.from('#contact-form', {
  scrollTrigger: '#contact-form', 
  x:100, duration: 2, opacity: 0, delay: 0.7});