import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";

function CreateForm() {
    
    const username = 'Email'
    const password = 'Password'
    const controlPassword = 'Confirm password'
    
    const [buttonLabel, setButtonLabel] = useState<string>('Create')
    const [inputValue, setInputValue] = useState({
        username: "",
        password: "",
        controlPassword: ""
    })

    const [errors, setErrors] = useState<{username:boolean, password:boolean, controlPassword:boolean}>({
        username: false,
        password: false,
        controlPassword: false
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

        setErrorMessage()

        const valid = Object.values(errors).every(Boolean)

        if(valid) {
            // setLoadingButton(true)
            resetInput()
        }
    }

    function setErrorMessage() {
        for(const [key, value] of Object.entries(errors)) {
            if(key === 'username' && value === true) {
                console.log(key, value)
                setHelperText({
                    ...helperText,
                    username: "There is something wrong with the email"
                });
            }
            if(key === 'password' && value === true) {
                setHelperText({
                    ...helperText,
                    password: "The password is wrong"
                });
            }
            if(key === 'controlPassword' && value === true) {
                setHelperText({
                    ...helperText,
                    controlPassword: "The password does not match"
                });
            }
        }
    }

    function erroUsername() {
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                
        if(!inputValue.username.match(regexEmail)) {
            setErrors({
                ...errors,
                username: true
            });            
            console.log(errors.username)
        }
    }

    function errorPassword() {
        if(inputValue.password.length <= 5) {
            setErrors({
                ...errors,
                password: true
            });           
        }
    }

    function errorControlPassword() {
        if(inputValue.controlPassword !== inputValue.password) {
            setErrors({
                ...errors,
                controlPassword: true
            });           
        }
    }

    return(
        <div className="flex column w-20r">
            <TextField
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