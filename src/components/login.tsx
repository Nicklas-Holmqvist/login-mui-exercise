import { Button } from "@material-ui/core"
import React, { useState } from "react"
import UserForm from "./userForm"


function Login() {

    const [user, setUser] = useState<boolean>(true)
    const [label, setLabel] = useState<string>('Create account')
    const [loginInfo, setLoginInfo] = useState<string>('Don´t you have an account?')

    function changeUser() {
        if(user === true) {
            setUser(false) 
            setLabel('Go to login')
            setLoginInfo('Already have an account?')
            return
        }
        if(user === false){
            setUser(true) 
            setLabel('Create account')
            setLoginInfo('You don´t have an account?')
            return
        } 
    }

    return (
    <div className="flex center column h-100">
        <UserForm login={user} />
        <div className="mt-2" >
            <p>{loginInfo}</p>
            <Button variant="outlined" color="primary" onClick={changeUser}>{label}</Button>
        </div>
    </div>
    )
}

export default Login