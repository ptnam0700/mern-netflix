import React, { useContext, useState } from 'react'
import { login } from '../../context/authContext/apiCalls'
import { AuthContext } from '../../context/authContext/AuthContext'
import "./login.css"


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {isFetching, dispatch} = useContext(AuthContext)


    const handleLogin = (e) => {
        e.preventDefault()

        login({email, password}, dispatch)
    }

    // const login = async (user, dispatch) => {
    //     dispatch(loginStart())
    //     try {
    //         const res = await axios.post("/auth/login", user)
    //         dispatch(loginSuccess(res.data))
            
    //     } catch (error) {
    //         dispatch(loginFailure())
    //     }
    // }

    return (
        <div className='login'>
            <form action="" className="loginForm">
                <input 
                    type="text" 
                    placeholder='email' 
                    className='loginInput'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder='password' 
                    className='loginInput'
                    onChange={(e) => setPassword(e.target.value)}
                    
                />
                <button 
                    className="loginButton" 
                    onClick={handleLogin}
                    disabled={isFetching}
                >
                    Login
                </button>
            </form>
        </div>
    )
}
