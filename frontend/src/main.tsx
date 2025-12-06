import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NowPage from './pages/NowPage'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/now' element={<NowPage/>} />
      </Routes>
    </Router>
  </StrictMode>,
)
