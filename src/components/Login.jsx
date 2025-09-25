import toast from "react-hot-toast"
import { assets } from "../assets"
import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const submit = async e => {
        e.preventDefault()
        setError('')

        if (!email || !password) {
            const err = 'Please fill in all fields'
            setError(err)
            toast.error(err)
            return
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <div className="flex items-center justify-center mb-6">
                        <div className="flex items-center justify-center mb-6 ">
                            <img className="w-16 h-16 animate-spin-slow" src={assets.logo} alt="Logo"/>
                            <h1 className="ml-5 text-3xl font-bold animate-wiggle">EchoStudio</h1>
                        </div>
                    </div>
                    <h2 className="text-2xl text-blue-500 font-bold mb-2 animate-bounce">Welcome back</h2>
                    <p className="text-gray-700 animate-pulse">Log in</p>
                </div>
                <div className="bg-gray-900/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700">
                    <form className="space-y-6" onSubmit={submit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2" htmlFor="email">Email</label>
                            <input 
                                className="block w-full px-4 py-3 border border-gray-600 bg-gray-800/50 text-white placeholder-gray-400 
                                    focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:animate-pulse
                                    transition-all duration-400 rounded-lg"
                                type="text" name="email" id="email" autoComplete="email" placeholder="Enter your email" required
                                value={email} onChange={e => setEmail(e.target.value)} 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2" htmlFor="password">Password</label>
                            <input 
                                className="block w-full px-4 py-3 border border-gray-600 bg-gray-800/50 text-white placeholder-gray-400 
                                    focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:animate-pulse 
                                    transition-all duration-400 rounded-lg"
                                type="password" name="password" id="password" autoComplete="new-password" placeholder="Enter your password" required
                                value={password} onChange={e => setPassword(e.target.value)} 
                            />
                        </div>
                        <button
                            className="w-full flex justify-center py-3 px-4 border border-transparent 
                                        rounded-lg shadow-md text-sm font-medium text-white 
                                        bg-gradient-to-r from-blue-500 to-blue-700 
                                        hover:from-blue-600 hover:to-blue-800 
                                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 
                                        disabled:cursor-not-allowed 
                                        transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            Log in
                        </button>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-400">
                            Don't have an account?
                            <button className="text-green-400 hover:text-green-300 font-medium transition-colors cursor-pointer ml-1">
                                Register
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
