
import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";

function UserForm(props:any) {

    const username = 'Email'
    const password = 'Password'
    const [header, setHeader] = useState<string>('Login')
    const [buttonLabel, setButtonLabel] = useState<string>('Login')
    const [inputValue, setInputValue] = useState({
        username: "",
        password: ""
    })

    useEffect(() => {
        if(props.login === true) {
            setHeader('Login')
            setButtonLabel('Login')
            resetInput()         
        } else {
            setHeader('Create account')    
            setButtonLabel('Create Account')
            resetInput()     
        }
    }, [setHeader, props])

    function resetInput() {
        setInputValue({
            username: "",
            password: ""
        })    
    }

    function handleChange(e:any) {
        const value = e.target.value;

        setInputValue({
            ...inputValue,
            [e.target.name]: value
        })
    }

    return(
        <div className="flex column w-20r">
            <h1>{header}</h1>
            <TextField 
                name="username"
                margin="normal" 
                label={username} 
                value={inputValue.username}
                onChange={handleChange}
                type="text"
            />
            <TextField 
                name="password"
                margin="normal" 
                label={password} 
                value={inputValue.password}
                onChange={handleChange}
                type="password"
            />
            <Button variant="contained" color="primary">{buttonLabel}</Button>
        </div>
    )
}

export default UserForm