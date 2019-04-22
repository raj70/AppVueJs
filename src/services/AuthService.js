import store from "../store";
import {http} from "./HttpService";
import jwt from 'jsonwebtoken';

export function isLoggedIn(){
    const token = localStorage.getItem('token');
    return token !== null;
}

export function login(user){
   return http().post("/auth", user)
        .then(res => {        
            if(res){
                setToken(res.data.token);
            }
   });
}

function setToken(token){
    localStorage.setItem('token', token);
    store.dispatch('authenticate');
}

export function getToken(){
    const token = localStorage.getItem('token');
    return token;
}

export function logout(){
    localStorage.removeItem('token');
    store.dispatch('authenticate');
}

export function getUsername(){
    const token = decodeToken();
    if(!token){
        return null;
    }
    return token.user.username;
}

export function getUserId(){
    const token = decodeToken();
    if(!token){
        return null;
    }

    return token.user.id;
}

export function registerUser(user){
    return http().post('/register', user).then(res =>{
        if(res){
            console.log(res);
        }
    });
}

function decodeToken(){
    const token = getToken();
    if(!token){
        return null;
    }
    return jwt.decode(token);
}