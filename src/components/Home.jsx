import { useAuth } from "../context/AuthContext"

const Home = () => {

  const { logout } = useAuth()

  return (
    <>
      <div>Display</div>
      <button
        className="bg-red-600 hover:bg-red-700 py-1 px-3 rounded-2xl text-[15px] cursor-pointer transition-colors flex items-center gap-1"
        onClick={logout}>Log out</button>
    </>
  )
}

export default Home
