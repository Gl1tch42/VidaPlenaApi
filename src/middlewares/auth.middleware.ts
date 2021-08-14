import { Request, Response, NextFunction } from "express";

declare global {
    namespace Express {
        interface Request {
            user? : Record<string,any>
        }
    }
}

const jwt = require('jsonwebtoken');

const auth = (req: Request, res: Response, next: NextFunction ) => {

    try {
        const token = req.header("Authorization");
        if(!token) return res.status(400).json({msg:"Invalid Authentication"});

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: Error, user: any) => {
            if (err) return res.status(400).json({msg:'invalid authentication'});

            req.user = user;

            next();
        });
    } catch (err) {
        return res.status(500).json({msg:err.message});
    }
}

export default auth;