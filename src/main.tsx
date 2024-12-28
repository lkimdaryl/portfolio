import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Homepage/home'
import AboutMe from './pages/AboutMe/aboutme'
import Work from './pages/Workpage/workpage'
import Projects from './pages/Projects/projects'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {path: '/', element: <Home />},
      {path: '/about', element: <AboutMe />},
      {path: '/work', element: <Work />},
      {path: '/project', element: <Projects />}
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
