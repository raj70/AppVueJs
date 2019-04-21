import User from '../../model/user-model';

import * as validator from '../../utilities/user-password-validate';

export function index(req, res){
    const validation = validator.validateUser(req.body);
    
    if(!validation.isValid){
        return res.status(400).json({message: validation.message});
    }

    const user = new User({
        username: req.body.username,
        password: req.body.password, 
        first: req.body.first,
        last: req.body.last
    });

    user.save( error => {
        console.log(error);
        if(error){
            if(error.code === 11000){ /* 11000 means user taken */
                return res.status(403).json({message: 'usename is used '});
            }
            return res.status(500).json();
        }

        return res.status(201).json();
    });
}