import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.scss'
import { store } from './store/store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Homepage } from './pages'
import { Login } from './pages/login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
