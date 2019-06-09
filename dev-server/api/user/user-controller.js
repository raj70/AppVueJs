import User from '../../model/user-model';
import * as auth from '../../services/auth-service';

export function index(req, res){
    const userId = auth.getUserId(req);
    console.log("Users: " , userId);
    User.findOne({_id:userId}, (error, user)=>{
        if(error && !user){
            return res.status(500).json();
        }

        User.find({}, (e, users) =>{
            if(e && !users){
                return res.statu(500).json();
            }

            return res.status(200).json({users:users});
        });
    })
}