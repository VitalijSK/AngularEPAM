import {
    Request,
    Response
} from "express";
import router from './routes/users'

const http2 = require('http2');
const fs = require('fs');
const finalhandler = require('finalhandler');

function app(req: Request, res: Response) {
    router(req, res, finalhandler(req, res));
}

const port = 8443;
const server = http2.createSecureServer({
    key: fs.readFileSync(__dirname + '/../https/server.key'),
    cert: fs.readFileSync(__dirname + '/../https/server.crt'),
    passphrase: '20182018'
}, app);

server.listen(port, () => {
    console.log(`server on the port : ${port}`);
});