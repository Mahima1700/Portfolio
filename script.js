var typed = new typed(".text",{
    string :["Frontend Developer","Web Developer"],
    typedSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const certificates = document.querySelectorAll('.certificate img');
    certificates.forEach(cert => {
        cert.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <img src="${cert.src}" alt="${cert.alt}">
                </div>
            `;
            document.body.appendChild(modal);

            const closeButton = modal.querySelector('.close-button');
            closeButton.addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        });
    });
});


function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}




  var swiper = new Swiper(".swiper", {
    centeredSlides:true,
    speed: 400,
    loop : true,
    slidesPerView:"auto",
    freeMode: false,
    mousewheel: {
        thresholdDelta: 70,
    },
    Keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    breakpoints: {
        0: {
          spaceBetween: 50,
        },
        900: {
            spaceBetween: 50,
        },
        1100: {
            spaceBetween: 50,
        },
      },
  }); 
  
  
 
  
  
  
  
  
   
  
  
   
  
  