import axios from "axios";
import { createContext, useContext, useState } from "react";

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
    const [loading, setLoading] = useState(false)

    const register = async (email, password) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/auth/register`, { email, password })
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

    const contextValue = {
        register
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}