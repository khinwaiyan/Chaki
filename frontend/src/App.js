import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './components/main.css'; 
import { Header } from './components/Header';
import { Btn, SendBtn } from './components/Btn';
import { Footer } from './components/Footer';
import { H1, H2, H1Bold, H2Bold, P1, P2 } from './components/Text';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
    <>
      <Header />
      <Btn />
      <SendBtn />
      <H1 content={"H1"}/>
      <H2 content={"H2"}/>
      <H1Bold content={"H1Bold"}/>
      <H2Bold content={"H2Bold"}/>
      <P1 content={"P1"}/>
      <P2 content={"P2"}/>
      <Footer />
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