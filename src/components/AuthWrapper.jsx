import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import Register from "./Register"
import Login from "./Login"

const AuthWrapper = ({ children }) => {
  const { authenticated, loading } = useAuth()
  const [registering, setRegistering] = useState(false)

  if (loading) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="animated-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
  )

  if (!authenticated()) return registering 
    ? <Register toLogin={() => setRegistering(false)} /> 
    : <Login toRegister={() => setRegistering(true)} />

  return children
}

export default AuthWrapper
