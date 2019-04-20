import * as validator from '../../utilities/user-password-validate';

export function index(req, res){
    const validation = validator.validate(req.body);
    if(!validation.isValid){
        return res.status(400).json({message: validation.message});
    }

    const user = {
        username: req.body.username.toLowerCase(),
        password: req.body.password
    };
    console.log(user);

    return res.status(200).json();
}