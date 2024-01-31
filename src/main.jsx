import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { MiddleSection } from './components/MiddleSection.jsx'
import { Profile } from './components/Profile.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />} >
            <Route path='' element={<MiddleSection />} />
            <Route path='profile' element={<Profile />} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
    // <App />
  
)
