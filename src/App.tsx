import { useEffect } from 'react'
import removeDOMLoader from "./functions/removeDOMLoader"
import Router from "./pages/Router"
import NavBar from './layouts/NavBar/NavBar'

function App() {
  useEffect(() => {
    removeDOMLoader()
  }, [])
  
  return (
    <>
      <Router/>
      <NavBar/>
    </>
  )
}

export default App
