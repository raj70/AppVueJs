import User from '../../model/user-model';

import * as validator from '../../utilities/user-password-validate';

export function index(req, res){
    var validation = validator.validate(req.body);
    if(!validation.isValid){
        return res.status(400).json({message: validation.message});
    }
    User.findOne({ username: req.body.username.toLowerCase()}, (error, user) =>{
        if(error){
            return res.status(500).json();
        }
        if(!user){
            return res.status(401).json();
        }

        const passwordsMatch = User.passwordMatches(req.body.password, user.password);
        if(!passwordsMatch){
            return res.status(401).json();
        }else{
            return res.status(200).json();
        }
    })
}


