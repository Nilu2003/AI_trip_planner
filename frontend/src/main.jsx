import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider ,} from "react-router-dom";
import CreateTrip from './pages/CreateTrip.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import GenerateTrip from './pages/GenerateTrip.jsx';

const router= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"create-trip",
        element:<CreateTrip/>
      },
      {
        path:"signin",
        element:<SignIn/>
      },
      {
        path:"signup",
        element:<SignUp/>
      },
      {
        path:"generate-trip",
        element:<GenerateTrip/>
      }
    ]
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
