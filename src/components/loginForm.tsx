import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import validations from './validation'
import {IUser, IError} from '../interface/user'

function LoginForm(props:any) {

    const {validLogin} = validations()

    const username:string = 'Email'
    const password:string = 'Password'
    const buttonLabel:string = 'Login'

    const [inputValue, setInputValue] = useState<IUser>({
        username: "",
        password: "",
    })
    const [errors, setErrors] = useState<IError>({
        username: false,
        password: false,
    })
    const [helperText, ] = useState<IUser>({
        username: "",
        password: "",
    })

    /** Resets the input fields when successfully login */
    function resetInput() {
        setInputValue({
            username: "",
            password: "",
        })    
    }

    /** Handle the input changes */
    function handleChange(e:any) {
        const value = e.target.value;

        setInputValue({
            ...inputValue,
            [e.target.name]: value
        })     
    }

    /** validate the input data */
    function validate() {
        setErrors(validLogin(inputValue))
        errorTexts(validLogin(inputValue))
        const valid = Object.values(validLogin(inputValue)).every(item => item === false)
        if(valid) {
            props.loggedIn(true)
            resetInput()
        }
    }
    /**
     * 
     * @param errors Fetch the errors from validation.tsx and set the helperText on the fields with errors
     * @returns Just to end the function
     */
    function errorTexts(errors:IError) {    
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