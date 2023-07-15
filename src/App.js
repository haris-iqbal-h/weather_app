import React from 'react'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </Router>
        </>
    )
}
export default App