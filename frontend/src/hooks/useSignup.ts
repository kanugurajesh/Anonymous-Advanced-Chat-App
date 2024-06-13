import { useState } from "react";

interface inputTypes {
    fullName: String,
    userName: String,
    password: String,
    confirmPassword: String,
    gender: String
}

const useSignUp = () => {
    const [loading, setLoading] = useState(false);

    const signup = async({fullName, userName, password, confirmPassword, gender}) => {
        const success = handleInputErrors({fullName, userName, password, confirmPassword, gender})
        if(!success) return;
    }

}