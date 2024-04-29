import './App.css'
import Home from '../src/components/screens/Home'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Login from './components/screens/Login'
function App() {

  return (
    <>
      <Router>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
