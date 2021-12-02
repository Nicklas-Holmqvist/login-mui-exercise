// importeras in till FormSignup och ner i useForm
export default function validateInfo(values:any) {
    let errors: {username: string, email:string, password:string, password2:string} = {
        username: "",
        email: "",
        password: "",
        password2: ""
    }

    if(!values.username.trim()) {
        errors.username = "username required"
    }

    if(!values.email) {
        errors.email ="Email required"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "email address is invalid"
    }

    if(!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more"
    }

    if(!values.password2) {
        errors.password2 = "Confirm password"
    } else if (values.password2 !== values.password) {
        errors.password2 = "Password do not match"
    }

    return errors;
}