import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css'; 
import { Header } from './components/Header';
import { Btn, SendBtn } from './components/Btn';
import { Footer } from './components/Footer';
import { H1, H2, H1Bold, H2Bold, P1, P2 } from './components/Text';
import Appearance from './page/Appearance';
import Keyword from './page/Keyword';
import TextInput from './page/TextInput';

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