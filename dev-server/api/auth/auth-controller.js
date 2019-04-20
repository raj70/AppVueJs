import * as validator from '../../utilities/user-password-validate';

export function index(req, res){
    var validation = validator.validate(req.body);
    if(!validation.isValid){
        return res.status(400).json({message: validation.message});
    }

    return res.status(200).json();
}


