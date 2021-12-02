import { Button } from '@material-ui/core'
import React from 'react'


function Logout(props:any) {

    const header = 'Welcome'
    const label = 'Logout'

    const logout = () => {
        props.loggedIn(false)
        localStorage.removeItem('user')
    }

    return (
        <div className="flex center column h-100">
            <h1>{header}</h1>
            <Button  onClick={logout} size="large" variant="contained" color="primary">{label}</Button> 
        </div>
    )
}

export default Logout
