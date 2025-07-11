import api from "../axios"

interface LoginProps {
    email: string,
    password:string
}

export default async function login({email,password}:LoginProps) {
    const {data,status} = await api.post('/auth/login',{
        email,password
    });
    return {data,status}
}