import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URI;
/* 
class User{
    constructor(){
        this.user = axios.create({
            baseUrl:`${baseUrl}/api/user`,
            withCredentials:true
        })
    }

    getAll(){
        return this.user
        .get()
        .then(({data})=>data)
    }
}

const userService = new User()
export default userService */
export const userService = async () =>{
    
    try {
        const data  = await axios.get(`${baseUrl}/api/user`);
    
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}


