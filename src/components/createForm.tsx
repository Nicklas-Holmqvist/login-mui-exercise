import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import validations from "./validation";

interface User {
    username:string,
    password:string,
    controlPassword:string
}

interface Error {
    username:any,
    password:any,
    controlPassword:any
}

function CreateForm() {

    const {validCreate} = validations()
    
    const username: string = 'Email'
    const password: string = 'Password'
    const controlPassword: string = 'Confirm password'
    
    const buttonLabel: string = 'Create'
    const [inputValue, setInputValue] = useState<User>({
        username: "",
        password: "",
        controlPassword: ""
    })

    const [errors, setErrors] = useState<Error>({
        username: undefined,
        password: undefined,
        controlPassword: undefined
    })
    const [helperText, setHelperText] = useState<User>({
        username: "",
        password: "",
        controlPassword: ""
    })

    function handleChange(e:any) {
        const value = e.target.value;

        setInputValue({
            ...inputValue,
            [e.target.name]: value
        })     
    }

    function resetInput() {
        setInputValue({
            username: "",
            password: "",
            controlPassword: "",
        })
    }

    function validate() {
        setErrors(validCreate(inputValue))
        errorTexts(validCreate(inputValue))
        const valid = Object.values(validCreate(inputValue)).every(item => item === false)
        
        if(valid) {
            console.log('allt ok!')
            localStorage.setItem('user', JSON.stringify({username: inputValue.username, password: inputValue.password}))
            resetInput()
        }
    }    

    function errorTexts(errors:Error) {    
        if(errors.username) helperText.username = "Email format ex. myname@domain.com"; else helperText.username = ""    
        if(errors.password) helperText.password = "The password needs more than 5 characters"; else helperText.password = ""    
        if(errors.controlPassword) helperText.controlPassword = "The password does not match"; else helperText.controlPassword = ""   
        return
    }

    return(
        <div className="flex column w-20r">
            <TextField
                required
                autoFocus
                variant="standard"
                name="username"
                margin="normal" 
                label={username} 
                value={inputValue.username}
                onChange={handleChange}
                type="email"
                error={errors.username}
                helperText={helperText.username}
            />
            <TextField 
                required
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
            <TextField 
                required
                name="controlPassword"
                variant="standard"
                margin="normal" 
                label={controlPassword} 
                value={inputValue.controlPassword}
                onChange={handleChange}
                type="password"
                error={errors.controlPassword}
                helperText={helperText.controlPassword}
                />
            <div className="mt-2 w-20r">
                <Button  onClick={validate} size="large" variant="contained" color="primary">{buttonLabel}</Button>  
            </div>
        </div>
    )
}

export default CreateForm