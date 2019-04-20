import s from 'underscore.string';


export const validate = function(body){
    let errors = '';
    if(s.isBlank(body.username)){
        errors += "User name is required";
    }
    if(s.isBlank(body.password)){
        errors += "Password is required";
    }

    return{
        isValid: s.isBlank(errors),
        message: errors
    };
}

