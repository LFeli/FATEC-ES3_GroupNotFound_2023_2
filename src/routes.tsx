import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { PetPerfil } from './pages/PetPerfil'
import { App } from './App'
import { PageNotFound } from './pages/PageNotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },

      {
        path: 'login',
        element: <Login />,
      },
    
      {
        path: 'pet-perfil',
        element: <PetPerfil />
      }
    ]
  },


])