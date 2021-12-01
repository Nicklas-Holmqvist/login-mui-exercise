import { Button } from "@material-ui/core"
import React, { useState } from "react"
import CreateForm from "./createForm"
import LoginForm from "./loginForm"


function Login() {

    const [user, setUser] = useState<boolean>(true)
    const [label, setLabel] = useState<string>('Create account')
    const [loginInfo, setLoginInfo] = useState<string>('Don´t you have an account?')
    const [header, setHeader] = useState<string>('Login')

    function changeUser() {
        if(user === true) {
            setUser(false) 
            setLabel('Go to login')
            setLoginInfo('Already have an account?')
            setHeader("Create account")
            return
        }
        if(user === false){
            setUser(true) 
            setLabel('Create account')
            setLoginInfo('You don´t have an account?')
            setHeader("Login")
            return
        } 
    }

    return (
    <div className="flex center column h-100">
        <h1>{header}</h1>
        {user 
        ? <LoginForm />
        :  <CreateForm />
        }       
        <div className="mt-1" >
            <p>{loginInfo}</p>
            <Button variant="outlined" color="primary" onClick={changeUser}>{label}</Button>
        </div>
    </div>
    )
}

export default Login