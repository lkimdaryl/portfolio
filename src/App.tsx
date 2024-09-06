import './App.css'
import ReactGA from 'react-ga4';
import Header from './components/Header/header'
import Hero from './components/Hero/hero'
import Main from './components/Main/main'
function App() {
  ReactGA.initialize('G-BPQDS84M0P');

  return (
    <>
      <Header />
      <div className='content'>
        <Hero />
        <Main />
      </div>

    </>
  )
}

export default App
