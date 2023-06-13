const header = document.querySelector('header')
const arrow = document.querySelector('#arrow-icon')

arrow.addEventListener('click' , () => {
    header.classList.toggle('header-active')
    arrow.classList.toggle('icon-active')
})

//------------------------------------------------------

const label = document.querySelectorAll('.form-label')
const input = document.querySelectorAll('.form-input')

input.forEach((element , i) => {
    element.addEventListener('focusin' , ()=>{
        label[i].classList.add('focused')
    })

    element.addEventListener('focusout' , ()=>{
        label[i].classList.remove('focused')
    })
})