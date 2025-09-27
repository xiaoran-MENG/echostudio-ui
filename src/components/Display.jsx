import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Search from "./Search"
import Album from "./Album"

const Display = () => {
  return (
    <div className="flex-1 px-6 pb-4 overflow-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album" element={<Album />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  )
}

export default Display
