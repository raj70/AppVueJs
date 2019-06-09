import {http} from './HttpService';

export function getAllUsers(){
    console.log("getAllUsers");
    return http().get('/users');
}