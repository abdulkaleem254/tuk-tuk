import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/pages/About';
import Applayout from './components/layout/Applayout';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import Services from './components/pages/Services';
import { ServiceProvider } from './components/contextServices';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/services',
          element: <Services />
        },
        {
          path: '/gallery',
          element: <Gallery />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ]);

  return (
    <ServiceProvider>

      <RouterProvider router={router} />
    </ServiceProvider>

  );
}

export default App;