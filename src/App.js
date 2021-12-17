import "./App.css"
import Hero from "./Components/Hero"
import { BrowserRouter as Router } from "react-router-dom"
import Sidebar from "./Components/Sidebar"
function App() {
  return (
    <>
      <>
        <Router>
          <Sidebar />
          <Hero />
        </Router>
      </>
    </>
  )
}

export default App
