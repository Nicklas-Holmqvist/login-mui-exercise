import React, { useState } from "react"
import CreateForm from "./CreateForm"
import LoginForm from "./LoginForm"

function Login(props:any) {

    const [user, setUser] = useState<boolean>(true)
    const [label, setLabel] = useState<string>('Create account')
    const [loginInfo, setLoginInfo] = useState<string>('Don´t you have an account?')
    const [header, setHeader] = useState<string>('Login')

    /** Change between login and create and some text fields */
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

    /** When successefully create an account you switch to login page */
    function login() {
        setUser(true)
        changeUser()
    }

    return (
    <div className="flex center column h-100">
        <h1>{header}</h1>
            {user 
            ? <LoginForm loggedIn={props.loggedIn}/>
            : <CreateForm goLogin={login}/>
            }    
        <div className="mt-1" >
            <p>{loginInfo}</p>
            <p className="pointer bold" onClick={changeUser}>{label}</p>
        </div>
    </div>
    )
}

export default Login