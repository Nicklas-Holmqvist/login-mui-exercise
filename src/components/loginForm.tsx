
import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";

function LoginForm(props:any) {

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
        resetValidation()        
    }

    function resetValidation() {
        if(errors.username === true || errors.password === true) {
            setErrors({
                username: false,
                password: false,
            })
            setHelperText({
                username: "",
                password: "",
            });
        }else return   
    }

    function validate() {
        erroUsername()
        errorPassword()
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
                username: "There is something wrong with the email"
            });
        } else return
    }

    function errorPassword() {
        if(inputValue.password.length <= 5) {
            setErrors({
                ...errors,
                password: true
            });
            setHelperText({
                ...helperText,
                password: "The password is wrong"
            });
        } else return
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