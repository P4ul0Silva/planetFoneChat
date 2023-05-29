import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom'
import { GlobalStyle } from './styles/globalStyles.ts'
import GlobalProvider from './contexts/Global/GlobalContext.tsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle/>
      <GlobalProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
      <App />
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
