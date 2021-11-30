import React, { useState } from "react"
import UserForm from "./userForm"

function Login() {

    const [user, setUser] = useState<boolean>(true)
    const [label, setLabel] = useState<string>('Create account')

    function changeUser() {
        if(user === true) {
            setUser(false) 
            setLabel('Go to login')
            return
        }
        if(user === false){
            setUser(true) 
            setLabel('Create account')
            return
        } 
    }

    return (
    <div>
        <UserForm login={user} />
        <button onClick={changeUser}>{label}</button>
    </div>
    )
}

export default Login