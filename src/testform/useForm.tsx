import {useState, useEffect} from 'react';

const useForm = (callback:any, validate:any) => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""
    })
    const [errors, setErrors] = useState<{username:string, email:string, password:string, password2:string}>({
        username: "",
        email: "",
        password: "",
        password2: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e:any) => {
        const {name, value}: {name:string, value:string} = e.target
        setValues({
            ...values,
            [name]: value 
        })
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true)
    }

    useEffect(()=> {
        console.log(Object.keys(errors).length)
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback(true)
        }
    },[errors, isSubmitting, callback])

    return {handleChange, values, handleSubmit, errors}
}

export default useForm