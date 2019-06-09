import s from 'underscore.string';


export const validate = function (body) {
    let errors = '';
    if (s.isBlank(body.username)) {
        errors += "User name is required";
    }
    if (s.isBlank(body.password)) {
        errors += "Password is required";
    }

    return {
        isValid: s.isBlank(errors),
        message: errors
    };
}

export const validateUser = function (body) {
    let errors = '';
    console.log(body.username);
    if (s.isBlank(body.username)) {
        errors += `Validating user ${body.username} `;
        errors += "User name is required ";
    }
    if (s.isBlank(body.password)) {
        errors += "Password is required ";
    }
    if (s.isBlank(body.first)) {
        errors += "first name is required ";
    }
    if (s.isBlank(body.last)) {
        errors += "last name is required ";
    }

    return {
        isValid: s.isBlank(errors),
        message: errors
    };
}