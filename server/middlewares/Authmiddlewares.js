// import jwt from 'jsonwebtoken'



// export const verfiyToken = ( request, response, next ) =>{
  
    
//     const token = request.cookies.jwt;
//     if(!token) return response.status(401).send("you are not authenticated")
    
//     jwt.verify(token.process.env.JWT_KEY, async(err,payload)=>{
//         if(err) return response.status(403).send("Token is not vailed");

//         request.userId = payload.userId;
//         next();
//     } )
  
// };

import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) return res.status(401).send("You are not authenticated");

  jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
    if (err) return res.status(403).send("Token is not valid");

    req.userId = payload.userId;
    next();
  });
};
