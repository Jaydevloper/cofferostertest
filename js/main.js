const elWrraperlist = document.querySelector('.site-wrraper-list--mobile') 
const elWrraperBTN = document.querySelector('.js-header-btn') 

elWrraperBTN.addEventListener('click', () => {
    elWrraperlist.classList.toggle('site-wrraper-list--open')
})
const mainwrraper = document.querySelector('.site-main-wrraper') 
const mainwrraperBTN = document.querySelector('.js-header-btn') 

mainwrraperBTN.addEventListener('click', () => {
    mainwrraper.classList.toggle('site-main-wrraper--open')
})

