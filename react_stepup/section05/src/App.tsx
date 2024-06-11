import { BrowserRouter, Link } from 'react-router-dom'
import './App.css'
import { Router } from './router/Router'

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <br />
      <Link to="/page1">Page1</Link>
      <br />
      <Link to="/page2">Page2</Link>
      <Router />
    </BrowserRouter>
  )
}

export default App
