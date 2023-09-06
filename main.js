const menuBtn=document.querySelector('.menu-toggle')

const menuSide=document.querySelector('.sidebar')

menuBtn.addEventListener('click',()=>{
    menuSide.classList.toggle('open')
})
