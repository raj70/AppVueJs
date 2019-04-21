import store from "../store";
import {http} from "./HttpService";

export function isLoggedIn(){
    const token = localStorage.getItem('token');
    return token !== null;
}

export function login(user){
   return http().post("/auth", user).then(res => {
        if(res){
            console.log(res);
            const fakeToken = {
                token: res.data.token
            }
            setToken(fakeToken);
        }
   });
}

function setToken(token){
    localStorage.setItem('token', token);
    store.dispatch('authenticate');
}

export function getToken(){
    return localStorage.getItem('token');
}

export function logout(){
    console.log("logging out");
    localStorage.removeItem('token');
    store.dispatch('authenticate');
}

export function getUsername(){
    return 'rajen';
}

export function getUserId(){
    return 1;
}

export function registerUser(user){
    return http().post('/register', user).then(res =>{
        if(res){
            console.log(res);
        }
    });
}