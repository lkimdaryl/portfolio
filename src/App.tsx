import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from './components/Navigation/navigation'
import Scene from './components/threeD/scene'

export default function App() {

    return (
        <div className='App'>
            {/* <div id='scene-container'>
            </div> */}
            <Scene />
            <Navigation />
            <Outlet />
        </div>
    )
}
