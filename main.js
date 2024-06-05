let navBar = document.querySelector('.navbar');
let navBarBrand = document.querySelector('.navbar-brand');
let hide = document.querySelector('.hide');
let hide2 = document.querySelector('.hide2');
let centerScroll = document.querySelector('.center-scroll');
let navDiv = document.querySelector(`.navDiv`)





window.addEventListener('scroll', () => {
    let scrolled = window.scrollY
    if (scrolled > 30) {
        navBar.classList.remove('w-75', 'rounded-bottom-5');
        navBar.classList.add('w-100');
        hide.classList.add('d-md-none');
        hide2.classList.add('d-md-none');
        navDiv.classList.add(`flex-md-column`)
    } else {
        navBar.classList.add('w-75', 'rounded-bottom-5')
        navBar.classList.remove('w-100')
        hide.classList.remove('d-md-none');
        hide2.classList.remove('d-md-none');
        navDiv.classList.remove(`flex-md-column`)
    }
    
})



// let reviewsSwiperWrapper = document.querySelector('#reviewsSwiperWrapper');
// reviews.forEach((review) => {
//     let div = document.createElement('div');
//     div.classList.add('swiper-slide', `flex-column` , "p-4");
//     div.innerHTML = 
//     `<h3 class= 'fw-bold font-title text-dark'>${review.name}</h3>
//     <p class="fs-5 mt-3 text-dark">${review.description}</p>
//     <a`
    
    
//     reviewsSwiperWrapper.appendChild(div)
// })


let swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});





