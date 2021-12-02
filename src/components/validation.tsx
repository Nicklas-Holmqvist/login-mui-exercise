import {IUser, IError} from '../interface/user'

const validations = () => {

    /**
     * 
     * @param values Fetch input values from the loginForm
     * @returns returns the object errors that triggers the validation of the inputs with errors and errorTexts
     */
    const validLogin = (values:IUser) => {
        const jsonParse: any = localStorage.getItem('user');
        const users: any = JSON.parse(jsonParse)
        const errors: IError = ({
            username: false,
            password: false,
        })            
        if(values.username.trim() !== users?.username || values.username === null) errors.username = true; else errors.username = false
        if(values.password !== users?.password || values.password === null) errors.password = true; else errors.password = false
        return errors
    }

    /**
     * 
     * @param values Fetch input values from the createForm
     * @returns returns the object errors that triggers the validation of the inputs with errors and errorTexts
     */
    const validCreate = (values:IUser) => {
        const jsonParse: any = localStorage.getItem('user');
        const users: any = JSON.parse(jsonParse)
        const errors: {username:boolean, password:boolean, controlPassword:boolean, doubleUser?:boolean} = ({
            username: false,
            password: false,
            controlPassword: false,
            doubleUser: false
        })    
        const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        
        if(users?.username === values.username.trim()) errors.doubleUser = true; else errors.doubleUser = false
        if(!values.username.match(regexEmail) || users?.username === values.username.trim()) errors.username = true; else errors.username = false
        if(values.password.length <= 5 || values.password === null) errors.password = true; else errors.password = false
        if(values.controlPassword !== values.password || values.controlPassword === "")errors.controlPassword = true; else errors.controlPassword = false
        return errors
    }
    return {validCreate, validLogin}
}

export default validations