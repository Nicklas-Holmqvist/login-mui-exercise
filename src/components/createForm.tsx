import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";

function CreateForm() {
    
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
        resetValidation()        
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
        errorControlPassword()
        errorPassword()
        erroUsername()

        const valid = Object.values(errors).every(item => item === false)

        if(valid) {
            // setLoadingButton(true)
            resetInput()
        }
    }

    function erroUsername() {
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                
        if(!inputValue.username.match(regexEmail)) {
            setErrors({
                ...errors,
                username: true
            });            
            setHelperText({
                ...helperText,
                username: "Email format ex. myname@domain.com"
            });
        }
    }

    function errorPassword() {
        if(inputValue.password.length <= 5) {
            setErrors({
                ...errors,
                password: true
            });       
            setHelperText({
                ...helperText,
                password: "The password needs more than 5 characters"
            });
        }
    }

    function errorControlPassword() {
        if(inputValue.controlPassword !== inputValue.password) {
            setErrors({
                ...errors,
                controlPassword: true
            });    
            setHelperText({
                ...helperText,
                controlPassword: "The password does not match"
            });          
        }
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
            />
            {errors.username && <p>{helperText.username}</p>}
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
            />
            {errors.password && <p>{helperText.password}</p>}
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
                />
            {errors.controlPassword && <p>{helperText.controlPassword}</p>}
            <div className="mt-2 w-20r">
                <Button  onClick={validate} size="large" variant="contained" color="primary">{buttonLabel}</Button>  
            </div>
        </div>
    )
}

export default CreateForm