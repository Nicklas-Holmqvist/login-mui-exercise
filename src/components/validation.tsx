const validations = () => {

    const validLogin = (values:any) => {
        const jsonParse: any = localStorage.getItem('user');
        const users: any = JSON.parse(jsonParse)
        const errors: {username:boolean, password:boolean} = ({
            username: false,
            password: false,
        })    
        
        if(values.username !== users.username) errors.username = true; else errors.username = false
        if(values.password !== users.password) errors.password = true; else errors.password = false
        return errors

    }

    const validCreate = (values:any) => {
        const errors: {username:boolean, password:boolean, controlPassword:boolean} = ({
            username: false,
            password: false,
            controlPassword: false
        })    
        const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
                
        if(!values.username.match(regexEmail)) errors.username = true; else errors.username = false
        if(values.password.length <= 5) errors.password = true; else errors.password = false
        if(values.controlPassword !== values.password || values.controlPassword === "")errors.controlPassword = true; else errors.controlPassword = false
        return errors
    }

    return {validCreate, validLogin}
}

export default validations