import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css'; 
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Appearance from './page/Appearance';
import Keyword from './page/Keyword';
import TextInput from './page/TextInput';
import LoveLanguage from './page/LoveLanguage';
import ImageGeneration from './page/ImageGeneration';
import Result from './page/Result';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
    <>
      <Header />
      <Appearance />
      <Footer />
    </>
    )
  },
  {
    path: '/keyword',
    element: (
    <>
      <Header />
      <Keyword />
    </>
    )
  },
  {
    path: '/textinput',
    element: (
    <>
      <Header />
      <TextInput/>
      <Footer />
    </>
    )
  },
  {
    path: '/lovelanguage',
    element: (
      <>
        <Header />
        <LoveLanguage />
      </>
    )
  },
  {
    path: '/generate',
    element: (
      <>
        <Header />
        <ImageGeneration />
        {/* <Footer /> */}
      </>
    )
  },
  {
    path: '/result',
    element: (
      <>
        <Header />
        <Result />
      </>
    )
  
  }
  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;