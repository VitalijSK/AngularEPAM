import users from '../models/Users';
import {
    Request,
    Response
} from 'express';
import IUserRequest from '../interfaceRoute';

class UsersControllers {
    getUsers(req: Request, res: Response) {
        const arrUsers = users.getUsers();
        if (arrUsers) {
            return res.end(JSON.stringify(arrUsers));
        }
        return res.end('Empty');
    };
    getUserById(req: Request, res: Response) {
        const user = users.getUserById(+req.params.id);
        if (user) {
            return res.end(JSON.stringify(user));
        }
        return res.end('This user is not found');
    };

    addUser(req: Request & IUserRequest, res: Response) {
        const user = users.addUser(req.user);
        if (user) {
            return res.end('User was added');
        }
        return res.end('Something gone wrong');
    };

    editUserById(req: Request & IUserRequest, res: Response) {
        req.user.id = +req.params.id;
        const user = users.updateUserById(req.user);
        if (user) {
            return res.end(JSON.stringify(user));
        }
        return res.end('Something gone wrong');

    };
    deleteUserById(req: Request, res: Response) {
        const user = users.deleteUserById(+req.params.id);
        if (user) {
            return res.end('User was deleted');
        }
        return res.end('This user is not found');
    };
};
export default new UsersControllers();