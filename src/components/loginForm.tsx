
import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import validations from './validation'

interface User {
    username:string,
    password:string
}

interface Error {
    username:any,
    password:any
}

function LoginForm(props:any) {

    const {validLogin} = validations()
    const username = 'Email'
    const password = 'Password'
    const controlPassword = 'Control password'
    const [buttonLabel, setButtonLabel] = useState<string>('Login')
    const [inputValue, setInputValue] = useState({
        username: "",
        password: "",
    })
    const [errors, setErrors] = useState<{username:boolean, password:boolean}>({
        username: false,
        password: false,
    })
    const [helperText, setHelperText] = useState<{username:string, password:string}>({
        username: "",
        password: "",
    })

    function resetInput() {
        setInputValue({
            username: "",
            password: "",
        })    
    }

    function handleChange(e:any) {
        const value = e.target.value;

        setInputValue({
            ...inputValue,
            [e.target.name]: value
        })     
    }

    function validate() {
        setErrors(validLogin(inputValue))
        errorTexts(validLogin(inputValue))
        const valid = Object.values(validLogin(inputValue)).every(item => item === false)
        if(valid) {
            resetInput()
        }
    }

    function errorTexts(errors:Error) {    
        if(errors.username) helperText.username = "There is something wrong with the email"; else helperText.username = ""    
        if(errors.password && (errors.username || !errors.username)) helperText.password = "The password is wrong"; else helperText.password = ""
        return
    }

    return(
        <div className="flex column w-20r">
            <TextField
                autoFocus
                name="username"
                variant="standard"
                margin="normal" 
                label={username} 
                value={inputValue.username}
                onChange={handleChange}
                type="email"
                error={errors.username}
                helperText={helperText.username}
            />
            <TextField 
                name="password"
                variant="standard"
                margin="normal" 
                label={password} 
                value={inputValue.password}
                onChange={handleChange}
                type="password"
                error={errors.password}
                helperText={helperText.password}
            />
            <div className="mt-2 w-20r">
                <Button onClick={validate} size="large" variant="contained" color="primary">{buttonLabel}</Button>  
            </div>
        </div>
    )
}

export default LoginForm