export interface IUser {
    id: number;
    name: string;
}

export class User implements IUser {
    id: number;
    name: string;
    constructor(id: number | undefined, name: string) {
        this.id = id || -1;
        this.name = name;
    }
}