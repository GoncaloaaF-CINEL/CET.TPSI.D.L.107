import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import './index.css'
import App from './App.jsx'
import Pag2 from "./pag2.jsx";
import Detalhes from "./Detalhes.jsx"
import NotFund from "./NotFund.jsx";


// URL vs URI

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFund />
    },
    {
        path: '/utilzadores',
        element: <Pag2 />
    },

    {
        path: '/utilzadores/:userId',
        element: <Detalhes />
    },
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
