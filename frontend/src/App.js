import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: '/',
    element: (
    <>
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