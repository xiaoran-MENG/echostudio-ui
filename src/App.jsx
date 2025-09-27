import { Toaster } from "react-hot-toast"
import Display from "./components/Display"
import AuthWrapper from "./components/AuthWrapper"

const App = () => {
  return (
    <>
      <Toaster/>
      <AuthWrapper>
        <Display />
      </AuthWrapper>
    </>
  )
}

export default App
