import './App.css'
import ReactGA from 'react-ga4';
import Header from './components/Header/header'
import Hero from './components/Hero/hero'
import Main from './components/Main/main'
function App() {
  ReactGA.initialize('G-BPQDS84M0P');

  ReactGA.send({
    'hitType': 'pageview', 
    'title': "Kim's Porfolio",
    'page': window.location.pathname
  });

  const handleEvent = (event: { type: string; }) => {
    ReactGA.event({
      category: 'user_engagement',
      action: event.type,
      label: event.type === 'scroll' ? `${window.scrollY}` : ''
    });
  };
  window.addEventListener('scroll', handleEvent);
  window.addEventListener('click', handleEvent);
  window.addEventListener('touchstart', handleEvent);

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
