import { User } from '../models/User';
import {
    Request,
    Response,
    NextFunction
} from 'express';
import IUserRequest from '../interfaceRoute';

export default {
    extendReqUser: (req: Request & IUserRequest, res: Response, next: NextFunction) => {
        if (req.body !== undefined && req.body.username !== undefined) {

            const newUser = new User(
                req.params.id,
                req.body.username
            );
            if (!newUser) {
                next('Wrong data for model');
            } else {
                req.user = newUser;
                next();
            }
        } else {
            next()
        }
    },
    errorHandler: (err: Error, req: Request, res: Response, next: NextFunction) => {
        next(err);
    }
};