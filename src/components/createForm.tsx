import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import validations from "./validation";
import {IUser, IError} from '../interface/user'

function CreateForm(props:any) {

    const {validCreate} = validations()
    
    const username: string = 'Email'
    const password: string = 'Password'
    const controlPassword: string = 'Confirm password'    
    const buttonLabel: string = 'Create'
    
    const [inputValue, setInputValue] = useState<IUser>({
        username: "",
        password: "",
        controlPassword: ""
    })

    const [errors, setErrors] = useState<IError>({
        username: false,
        password: false,
        controlPassword: false
    })
    const [helperText, ] = useState<IUser>({
        username: "",
        password: "",
        controlPassword: ""
    })

    /** Handle input changes */
    function handleChange(e:any) {
        const value = e.target.value;

        setInputValue({
            ...inputValue,
            [e.target.name]: value
        })     
    }

    /** Reset inputs after successfull login */
    function resetInput() {
        setInputValue({
            username: "",
            password: "",
            controlPassword: "",
        })
    }

    /** Validates the users input */
    function validate() {
        setErrors(validCreate(inputValue))
        errorTexts(validCreate(inputValue))
        const valid = Object.values(validCreate(inputValue)).every(item => item === false)

        if(valid) {
            localStorage.setItem('user', JSON.stringify({username: inputValue.username, password: inputValue.password}))
            resetInput()
            props.goLogin()
        }
    }    

    /**
     * Controls the errors and set the helptext on the inputs with errors
     * @param errors Array of errors
     * @returns just to end the function
     */
    function errorTexts(errors:IError) {    
        if(errors.doubleUser) return helperText.username = "This email is already in use"; else helperText.controlPassword = ""   
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