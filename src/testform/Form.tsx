import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'

function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
        console.log('YEY!')
    }
    return (
        <>
        <div className="form-container">
            <span className="close-btn">x</span>
            {!isSubmitted ? (
            <FormSignup submitForm={submitForm} />)
             : (<FormSuccess />)}
        </div>        
        </>
    )
}

// testform is a method Brian Design have an video on for validation of all inputfields
// link to video: https://www.youtube.com/watch?v=KGFG-yQD7Dw

export default Form
