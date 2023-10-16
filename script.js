const logpass_select_button = document.querySelector('#logpass_select_button')
const logpass_confirm = document.querySelector('.logpass_confirm')

logpass_select_button.addEventListener('click', ()=>{
    if(logpass_select_button.checked){
        logpass_confirm.classList.add('logpass_confirm_reg')
        logpass_confirm.innerHTML = "Зареєструватися"
    }else{
        logpass_confirm.classList.remove('logpass_confirm_reg')
        logpass_confirm.innerHTML = "Увійти"
    }
})