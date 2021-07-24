export function saveLogin(key, value){
    localStorage.setItem(key, JSON.stringify(value))
}

export function logout(){
    localStorage.clear()
}