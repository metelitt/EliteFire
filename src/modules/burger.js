// burger
const IconMenu=document.querySelector('.burger')
const MenuBody=document.querySelector('.header__nav-right')
IconMenu.addEventListener('click',function(e){
    document.body.classList.toggle('_lock')
    IconMenu.classList.toggle('_active')
    MenuBody.classList.toggle('_active')
})
