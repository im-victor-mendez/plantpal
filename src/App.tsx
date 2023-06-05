import { useEffect } from 'react'
import removeDOMLoader from "./functions/removeDOMLoader"
import Router from "./pages/Router"

function App() {
  useEffect(() => {
    removeDOMLoader()
  }, [])
  
  return (
    <>
      <Router/>
    </>
  )
}

export default App
