import { User } from './User';
import fileManager from '../filemanager';

class UsersModel {
    users: Array < User > ;
    constructor() {
        this.users = fileManager.getData();
    }
    getUsers() {
        return this.users.map(user => user);
    }
    getUserById(id: number) {
        const user = this.users.find(user => user.id === id);
        if (user) {
            return user;
        }
        return false;
    }
    updateUserById(user: User) {
        if (user) {
            const userIndex = this.users.findIndex(userOfArr => user.id === userOfArr.id);
            if (userIndex >= 0) {
                this.users[userIndex] = user;
                fileManager.saveFile(this.users);
                return user;
            }
        }
        return false;
    }
    addUser(user: User) {
        if (user) {
            user.id = this.getId();
            this.users.push(user);
            fileManager.saveFile(this.users);
            return true;
        }
        return false;
    }
    deleteUserById(id: number) {
        if (this.isExistId(id)) {
            this.users = this.users.filter(user => user.id !== id);
            fileManager.saveFile(this.users);
            return true;
        }
        return false;
    }
    isExistId(id: number) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex >= 0) {
            return true;
        }
        return false;
    }
    getId() {
        const lastUser = this.users[this.users.length - 1];
        return lastUser.id + 1;
    }
}

export default new UsersModel();