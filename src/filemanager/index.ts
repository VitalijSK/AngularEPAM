import * as fs from 'fs';
import { User } from '../models/User';
import { pathToUsers } from '../constants';

interface IFileManager {
    pathToFile: string;
    data: Array < User >
}
class FileManager implements IFileManager {
    pathToFile: string;
    data: Array < User > ;
    constructor() {
        this.pathToFile = pathToUsers;
        this.data = require(pathToUsers);
    }
    saveFile(users: Array < User > ) {
        this.data = users;
        fs.writeFileSync(this.pathToFile, JSON.stringify(users), 'utf-8');
    }
    getData() {
        return this.data;
    }
}


export default new FileManager();