import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './app/store'
import { Provider } from 'react-redux'
import {

  RouterProvider
} from "react-router-dom";
import { router } from './router/routers.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
