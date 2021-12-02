import { useEffect, useState } from "react";

const validations = () => {

    const valids = (values:any) => {
        const errors: {username:any, password:any, controlPassword:any} = ({
            username: undefined,
            password: undefined,
            controlPassword: undefined
        })    
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                
        if(!values.username.match(regexEmail)) errors.username = true    
        if(values.password.length <= 5) errors.password = true 
        if(values.controlPassword !== values.password || values.controlPassword === "")errors.controlPassword = true
        return errors
    }

    return {valids}
}

export default validations