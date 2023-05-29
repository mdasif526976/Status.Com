import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import Authprovider from './Compunent/Authprovider/Authprovider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
   <Authprovider>
   <App />
   </Authprovider>
    </ThemeProvider>
  </React.StrictMode>,
)
