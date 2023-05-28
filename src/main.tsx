import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom'
import { GlobalStyle } from './styles/globalStyles.ts'
import GlobalProvider from './contexts/Global/GlobalContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle/>
      <GlobalProvider>
      <App />
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
