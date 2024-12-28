import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from './components/Navigation/navigation'
import Scene from './components/threeD/scene'

export default function App() {

    return (
        <div className='App'>
            <div id='scene-container'>
                <Scene />
            </div>
            <Navigation />
            <Outlet />
            <div style={{width: '140px', height: '40px', borderRadius: '15px', backgroundColor: '#001D2F', position: 'absolute', zIndex: -1, bottom: 18, right: 20}} />
        </div>
    )
}
