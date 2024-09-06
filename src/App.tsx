import './App.css'
import Header from './components/Header/header'
import Hero from './components/Hero/hero'
import Main from './components/Main/main'
function App() {

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
