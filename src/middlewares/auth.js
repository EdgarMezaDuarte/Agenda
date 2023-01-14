const jwt = require('jsonwebtoken');
const authMiddleware = (req,res, next )=>{
    const token = req.headers.authorization;
    
    jwt.verify(token,'holamundo',(err,decoded) => {
        if(err){
            res.sendStatus(401);
            return;
        }
        req.user = decoded;
        console.log(req.user._id);
        next();
    });
}

module.exports = authMiddleware;