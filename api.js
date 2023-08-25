export const getProducts = async(id)=>{
    try{
        let url = id ? `https://fakestoreapi.com/products/${id}` :`https://fakestoreapi.com/products` 
        let data = await fetch(url);
        let res = await data.json();
        if(!res){
            throw{
                message:res,
                check:"check api call log for details"
            }
        }else{
            return res;
        }
    }catch(err){
        console.log(err);
        return err}
}

export const getAllCartItem = async(id)=>{
    try{
        let url = id?`https://fakestoreapi.com/carts/user/${id}`: `https://fakestoreapi.com/carts`
        let data = await fetch(url); 
        let res = await data.json();
        if(!res){
            throw{
                message:res,
                option:"check API response"
            }
        }else{
            return res
        }
    }catch(err){
        console.log(err)
    return err}
}

export const addToCartItem = async(id, credentials)=>{
    try{
        let url = id? `https://fakestoreapi.com/carts/user/${id}`:`https://fakestoreapi.com/carts`
        let data = await fetch(url,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(credentials)
        })
        let res = await data.json();
        if(!res){
            throw{
                message:res,
                checkk:"check API"
            }
        }
        return res;
        }catch(err){console.log(err)}
}


export const deleteFromCartItem = async(credentials)=>{
    try{
        let url= id?`https://fakestoreapi.com/carts/${id}`:`https://fakestoreapi.com/carts/6` 
        let data = await fetch(url,{
            method:"DELETE",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(credentials)
        })
        let res = await data.json();
        if(!res){
            throw{
                message:res,
                checkk:"check API"
            }
        }
        return res;
        }catch(err){console.log(err)}
}

export const signupUser = async(credentials)=>{
    try{
        let route = '/users/signup'
        let url = 'http://api.fakeshop-api.com'  //https://fakestoreapi.com/users
        let data = await fetch(`${url}/${route}`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(credentials)
        })
        let res = await data.json();
        console.log(res)
        if(!res){
            throw{
                message:res,
                check:"check api call log for details"
            }
        }else{
            return res;
        }

    }catch(err){
        console.error(err);
        return err;
    }
}

export const logInUser = async(credentials)=>{
    try{
        let url = "https://fakestoreapi.com/auth/login";
        let data = await fetch(url,{
            method:"post",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(credentials)
        })
        let res = await data.json();
        if(!res){
            throw{
                message: "nort ok",
                check:"check api call log for details"
            }
        }else{
            return res;
        }

    }catch(err){
        console.error(err);
        return err;
    }
}