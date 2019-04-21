import jsonwebtoken from 'jsonwebtoken';

export function generateJwt(user){
    const tokenData = { username: user.username, id: user._id }
    return jsonwebtoken.sign({ user: tokenData}, process.env.SIGN_SECRET);
}

export function requireLogin(req, res, next){
    var token = decodeToken(req);
    if(!token){
        return res.statu(401).json({message: "you need to login"});
    }
    next();
}

export function decodeToken(req){
    const token = req.headers.authorization || req.headers['authorization'];

    if(!token){
        return null;
    }

    try{
        return jsonwebtoken.verify(token, process.env.TOKEN_SECRET);
    }catch(error){
        return null;
    }
}