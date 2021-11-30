
import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";

function UserForm(props:any) {

    const username = 'Email'
    const password = 'Password'
    const [header, setHeader] = useState<string>('Login')

    useEffect(() => {
        if(props.login === true) {
            setHeader('Login')
        } else {
            setHeader('Create account')            
        }
    }, [setHeader, props])
    

    return(
        <div>
            <h3>{header}</h3>
            <TextField label={username} />
            <TextField label={password} />
        </div>
    )
}

export default UserForm