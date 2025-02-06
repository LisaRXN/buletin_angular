export interface IUser {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    country?: string;
    role?:number;
    avatar?:string;
}

