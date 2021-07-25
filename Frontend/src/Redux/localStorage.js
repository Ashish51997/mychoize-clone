export function saveLogin(key, value){
    localStorage.setItem(key, JSON.stringify(value))
}

export function logout(){
    localStorage.clear()
}

export function getItem(key){
    try{
        let data = JSON.parse(localStorage.getItem(key));
        // console.log(data)
        return data;
    }
    catch{
        return undefined;
    }
}