import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const API_BASE_URL = 'http://localhost:8080'

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within AuthProvider')
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(localStorage.getItem('userToken'))
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const storedToken = localStorage.getItem('userToken')
        const storedUser = localStorage.getItem('userData')

        if (storedToken && storedUser) {
            setToken(storedToken)
            setUser(JSON.parse(storedUser))
        }

        setLoading(false)
    }, [])

    const register = async (email, password) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/auth/register`, { 
                email, 
                password 
            })

            if (response,status === 200) {
                return {
                    success: true,
                    message: 'Registered'
                }
            } else {
                return {
                    success: false,
                    message: response.data.message || 'Failed to register user'
                }
            }
        } catch (error) {
            return {
                success: false,
                message: error.response.data.message || 'Failed to register user'
            }
        }
    }

    const login = async (email, password) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/auth/login`, {
                email,
                password
            })

            if (response.status === 200) {

                const user = {
                    email: response.data.email,
                    role: response.data.role
                }

                setToken(response.data.token)
                setUser(user)

                localStorage.setItem('userToken', response.data.token)
                localStorage.setItem('userData', JSON.stringify(user))

                return {
                    success: true
                }
            }
        } catch (error) {
            return {
                success: false,
                message: error.response.data || 'Network error'
            }
        }
    }

    const logout = () => {
        setToken(null)
        setUser(null)
        localStorage.removeItem('userToken')
        localStorage.removeItem('userData')
    }

    const authenticated = () => {
        return !!token && !!user
    }

    const contextValue = {
        register,
        login,
        logout,
        authenticated,
        loading
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}