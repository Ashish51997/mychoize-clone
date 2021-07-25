const saveLogin = (key,data)=>{
    localStorage.setItem(key,JSON.stringify(data));
}

export function logout(){
    localStorage.clear()
}


const loadData = (key)=>{
    try{
        let data =  localStorage.getItem(key);
        data = JSON.parse(data);
        return data;
    }
    catch{
        return false;
    }
}

export {loadData,saveLogin}