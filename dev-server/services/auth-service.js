import jsonwebtoken from 'jsonwebtoken';

export function generateJwt(user){
    const tokenData = { username: user.username, id: user._id }
    return jsonwebtoken.sign({ user: tokenData}, process.env.SIGN_SECRET);
}

export function requireLogin(req, res, next){
    var token = decodeToken(req);
    if(!token){
        return res.status(401).json({message: "you are not login"});
    }
    next();
}

export function decodeToken(req){
    const token = req.headers.authorization || req.headers['authorization'];

    if(!token){
        return null;
    }

    try{
        const isValid = jsonwebtoken.verify(token, process.env.SIGN_SECRET);
        return isValid;
    }catch(error){
        console.log(error);
        return null;
    }
}

export function getUserName(req){
    const token = decodeToken(req);
    if(!token){
        return null;
    }

    return token.user.username;
}

export function getUserId(req){
    const token = decodeToken(req);
    if(!token){
        return null;
    }

    return token.user.id;
}