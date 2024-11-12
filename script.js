// Initialize Swiper  
var swiper = new Swiper(".mySwiper", {  
    slidesPerView: 3,      
    spaceBetween: 30,      
    pagination: {  
        el: ".swiper-pagination",  
        clickable: true,  
    },  
    breakpoints: {  
        992: {  
            slidesPerView: 3,  
            spaceBetween: 30  
        },  
        768: {  
            slidesPerView: 2,  
            spaceBetween: 20  
        },  
        0: {  
            slidesPerView: 1,  
            spaceBetween: 10  
        }  
    }  
});  

// Counter functionality  
const counters = [  
    { element: document.getElementById('counter1'), target: 92 },  
    { element: document.getElementById('counter2'), target: 200 },  
    { element: document.getElementById('counter3'), target: 35 },  
    { element: document.getElementById('counter4'), target: 240 },  
];  

// Function to increment counters  
counters.forEach(counter => {  
    let count = 0;  
    const stepTime = Math.max(10, Math.floor(counter.target / 100)); // Adjust time based on target value  

    const interval = setInterval(() => {  
        count++;  
        counter.element.textContent = count;  

        if (count >= counter.target) {  
            clearInterval(interval);  
            counter.element.textContent = counter.target; // Ensure it ends at the target value  
        }  
    }, stepTime);  
});  

// Menu toggle functionality  
const menuIcon = document.querySelector('.iconi'); // Use querySelector for single element  
const menuWrapper = document.querySelector('.mmenu-wrapper');  

if (menuIcon && menuWrapper) { // Check if elements exist  
    menuIcon.addEventListener('click', () => {  
        if (menuWrapper.style.height === '0px' || menuWrapper.style.height === '') {  
            const contentHeight = menuWrapper.scrollHeight + "px";  
            menuWrapper.style.height = contentHeight; // Expand to content height  

            menuWrapper.addEventListener('transitionend', function transitionToAuto() {  
                menuWrapper.style.height = 'auto';  
                menuWrapper.removeEventListener('transitionend', transitionToAuto);  
            });  
        } else {  
            menuWrapper.style.height = '0px'; // Collapse menu to 0 height  
        }  
    });  
} else {  
    console.error("Menu icon or menu wrapper not found");  
}