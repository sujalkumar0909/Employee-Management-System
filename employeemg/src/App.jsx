import './App.css'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
