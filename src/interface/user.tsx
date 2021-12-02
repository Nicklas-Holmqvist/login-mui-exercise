
export interface IUser {
    username:string,
    password:string,
    controlPassword?:string
}
    
    
export interface IError {
    username:boolean,
    password:boolean,
    controlPassword?:boolean
}