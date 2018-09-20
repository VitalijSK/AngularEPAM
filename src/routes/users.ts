import userMiddleware from '../middelwares/apiWare';
import usersControllers from '../controllers/UserRoutController'
import * as bodyParser from 'body-parser';
//const cors = require('cors');node 
//const finalhandler = require('finalhandler');
const Router = require('router');

const jsonParser = bodyParser.json()

const router = Router();

router.use(jsonParser); 

router.get('/api/users/:id', usersControllers.getUserById);
router.get('/api/users', usersControllers.getUsers);

router.use(userMiddleware.extendReqUser, userMiddleware.errorHandler);

router.post('/api/users/', usersControllers.addUser);

router.put('/api/users/:id', usersControllers.editUserById);

router.delete('/api/users/:id', usersControllers.deleteUserById);

export default router;


