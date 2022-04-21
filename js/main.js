const elWrraperlist = document.querySelector('.site-wrraper-list') 
const elWrraperBTN = document.querySelector('.js-header-btn') 

elWrraperBTN.addEventListener('click', () => {
    elWrraperlist.classList.toggle('site-wrraper-list--open')
})
const elheadernav = document.querySelector('.site-main-nav') 
const elheaderBTN = document.querySelector('.js-header-btn') 

elheaderBTN.addEventListener('click', () => {
    elheadernav.classList.toggle('site-main-nav--img')
})
const cardlink = document.querySelector('.site-card-link') 
const cardlinkBTN = document.querySelector('.js-header-btn') 

cardlinkBTN.addEventListener('click', () => {
    cardlink.classList.toggle('site-card-link--content')
})