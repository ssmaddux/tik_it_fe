import { Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Venue from './Venue'
import Event from './Event'

const Main = () => {

    return (
        
    <div className="Main">
        <div className='nav-container'>
            <Nav/>
        </div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/venues' element={<Venue/>}/>
            <Route path='/events' element={<Event/>}/>
        </Routes>
    </div>
)
}

export default Main