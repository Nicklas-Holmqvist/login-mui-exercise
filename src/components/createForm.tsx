import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import validations from "./validation";

function CreateForm() {

    const {valids} = validations()
    
    const username = 'Email'
    const password = 'Password'
    const controlPassword = 'Confirm password'
    
    const [buttonLabel, setButtonLabel] = useState<string>('Create')
    const [inputValue, setInputValue] = useState<{username:string, password:string, controlPassword:string}>({
        username: "",
        password: "",
        controlPassword: ""
    })

    const [errors, setErrors] = useState<{username:any, password:any, controlPassword:any}>({
        username: undefined,
        password: undefined,
        controlPassword: undefined
    })
    const [helperText, setHelperText] = useState<{username:string, password:string, controlPassword:string}>({
        username: "",
        password: "",
        controlPassword: ""
    })

    function resetInput() {
        setInputValue({
            username: "",
            password: "",
            controlPassword: ""
        })    
    }

    function handleChange(e:any) {
        const value = e.target.value;

        setInputValue({
            ...inputValue,
            [e.target.name]: value
        })     
    }

    function resetValidation() {
        if(errors.username === true || errors.password === true || errors.controlPassword === true) {
            setErrors({
                username: false,
                password: false,
                controlPassword: false,
            })
            setHelperText({
                username: "",
                password: "",
                controlPassword: "",
            });
        }else return   
    }

    function validate() {
        setErrors(valids(inputValue))
        errorTexts(valids(inputValue))
        const valid = Object.values(errors).every(item => item === false)
        console.log(valid)

        if(valid) {
            // setLoadingButton(true)
            // resetInput()
        }
    }    

    function errorTexts(errors:any):any {
    
        if(errors.username) {
            helperText.username = "Email format ex. myname@domain.com"       
        } else helperText.username = ""
    
        if(errors.password) {
            helperText.password = "The password needs more than 5 characters"      
        } else helperText.password = ""
    
        if(errors.controlPassword) {
            helperText.controlPassword = "The password does not match"       
        } else helperText.controlPassword = ""   
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