export const  SessionStorage ={
     getSessionStorage: (key)=>{
            sessionStorage.getItem(key)
     }  , 
     setSessionStorage :(key,item)=>{
        sessionStorage.setItem(key, item)
     }
}
