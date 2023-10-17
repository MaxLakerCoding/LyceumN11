const logpass_container = document.querySelector('.logpass_container')
const logpass_exit = document.getElementById('logpass_exit')
const logpass_select_button = document.querySelector('#logpass_select_button')
const logpass_confirm = document.querySelector('.logpass_confirm')
const visiblehidden = document.getElementById('visiblehidden')
const user_marker = document.getElementById('user_marker')
const account_username = document.querySelector('.account_username')
const logout = document.getElementById('logout')
const login = document.getElementById('login')
const password = document.getElementById('password')

let visiblehidden_value = false
visiblehidden.addEventListener('click', ()=>{
    if(visiblehidden_value == false){
        password.setAttribute('type', 'text')
        visiblehidden.setAttribute('src', 'images/visible.svg')
        visiblehidden_value = true
    }else if(visiblehidden_value == true){
        password.setAttribute('type', 'password')
        visiblehidden.setAttribute('src', 'images/hidden.svg')
        visiblehidden_value = false
    }
})

account_username.addEventListener('click', ()=>{
    logpass_container.classList.remove('none')
})
logpass_exit.addEventListener('click', ()=>{
    logpass_container.classList.add('none')
})
logout.addEventListener('click', ()=>{
    account.guest = true,
    account.login = false
    user_marker.setAttribute('src', 'images/user_guest.svg')
    account_username.innerHTML = 'Увійти'
    logout.classList.add('none')
})


let account = {
    guest: true,
    login: false
}
window.addEventListener('load', ()=>{
    if(localStorage.getItem("login")){
        account.guest = false
        account.login = localStorage.getItem("login")
        user_marker.setAttribute('src', 'images/user_authorized.svg')
        account_username.innerHTML = account.login
        logout.classList.remove('none')
    }else{
        account.guest = true
        account.login = false
    }
})

let users = []
users.push(new User('login', 'password'))

function User(login, password){
    this.login = login,
    this.password = password
}

logpass_select_button.addEventListener('click', ()=>{
    if(logpass_select_button.checked){
        logpass_confirm.classList.add('logpass_confirm_reg')
        logpass_confirm.innerHTML = "Зареєструватися"
    }else{
        logpass_confirm.classList.remove('logpass_confirm_reg')
        logpass_confirm.innerHTML = "Увійти"
    }
})
logpass_confirm.addEventListener('click', ()=>{
    if(logpass_select_button.checked){
        if (password.value.length < 8 || password.value.length == 0){
            alert('Пароль має бути довжиною у 8 символів або більше!')
        }else if(login.value.length == 0){
            alert('Логін не може бути порожнім!')
        }else{
            for (let i = 0; i < users.length; i++) {
                if(login.value == users[i].login){
                    alert('123')
                    break
                }else{
                    let newuser = new User(login.value, password.value)
                    users.push(newuser)
                    console.log(users)
                    break
                }
            }
        } 
    }else if(!logpass_select_button.checked){
        for (let i = 0; i < users.length; i++) {
            if(login.value == users[i].login){
                if(password.value == users[i].password){
                    account.guest = false,
                    account.login = login.value
                    localStorage.setItem("login", login.value)
                    user_marker.setAttribute('src', 'images/user_authorized.svg')
                    account_username.innerHTML = login.value
                    logout.classList.remove('none')
                    logpass_container.classList.add('none')
                    login.value = ''
                    password.value = ''
                    
                }else{
                    alert('Неправильний пароль')
                }
            }
        }
    }
})