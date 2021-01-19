import React, {createContext, useState} from 'react'
import axios from 'axios'
import { baseUrl } from '../utils/url';
export const UserContext = createContext()


export const UserContextProvider = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})


    const loadUser =  async () => {
        if (localStorage.getItem('access')){
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`,
                    'Accept': 'application/json'
                }
            }

            try {
                const {data} = await axios.get(`${baseUrl}/auth/users/me/`, config)
                setUser(data)
                setIsAuthenticated(true)
            } catch (error) {
                console.log(error)
            }
        }else{
            setIsAuthenticated(false)
        }
       
    }

    const registerUser = async (dataToSubmit) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            setLoading(true)
            const {data} = await axios.post(`${baseUrl}/auth/users/`, dataToSubmit, config)
            if(data){
                setLoading(false)
            }
            //setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const loginUser = async (dataToSubmit) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const {data} = await axios.post(`${baseUrl}/auth/jwt/create/`, dataToSubmit, config)
            if(data){
                //console.log(data)
                localStorage.setItem('access', data.access)
                setIsAuthenticated(true)
            }
            loadUser()
        } catch (error) {
            console.log(error)
        }
    }
    const verifyUser = async (dataToSubmit) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const {data} = await axios.post(`${baseUrl}/auth/users/activation/`, dataToSubmit, config)
            if(data){
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const resetPassword = async (dataToSubmit) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            setLoading(true)
            await axios.post(`${baseUrl}/auth/users/reset_password/`, dataToSubmit, config)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    const confirmResetPassword = async (dataToSubmit) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            await axios.post(`${baseUrl}/auth/users/reset_password_confirm/`, dataToSubmit, config)
        } catch (error) {
            console.log(error)
        }
    }

    const logout = async () => {
        try {
            await localStorage.removeItem('access')
            setIsAuthenticated(false)
            loadUser()
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <UserContext.Provider
            value={{
                isAuthenticated,
                loading,
                user,
                setIsAuthenticated,
                registerUser,
                loginUser,
                verifyUser,
                loadUser,
                logout,
                resetPassword,
                confirmResetPassword
                
            }}
        
        
        > 
            {props.children}
        </UserContext.Provider>
    )
}