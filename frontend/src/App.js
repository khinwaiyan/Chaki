import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import SelectLoveLanguagePage from './LoveLanguage/LoveLanguage';



const router = createBrowserRouter([
  {
    path: '/',
    element: (

    <>
    </>
    )
  },
  {
    path: '/love-language',
    element: (
      <SelectLoveLanguagePage />
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