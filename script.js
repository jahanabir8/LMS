// menu js
const bar = document.querySelector('.bar')
const cross = document.querySelector('.cross')
const mobile__menu = document.querySelector('.mobile__menu')

bar.addEventListener('click', ()=>{
    mobile__menu.classList.toggle('show__menu')
})

cross.addEventListener('click', ()=>{
    if(mobile__menu.classList.contains('show__menu')){
        mobile__menu.classList.remove('show__menu')
    }
})