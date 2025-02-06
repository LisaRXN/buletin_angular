import { IUser } from "../interfaces/user.interface";

export class User implements IUser {

    id: number = 0
    firstname: string = ""
    lastname: string = ""
    email: string = ""
    password: string = ""
    country?: string = ""
    role?:number = 0
    avatar?:string = ""

}

