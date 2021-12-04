

let buttons = document.querySelector('.moblink')
let mobile = document.querySelector('.mobile-links')


buttons.addEventListener('click',()=>{
    if (buttons.classList.contains('open')){
        buttons.classList.remove('open')
        mobile.style.height = 0

    }
    else{
        buttons.classList.add('open')
    mobile.style.height = '8rem'
    }
    
})


