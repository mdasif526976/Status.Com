import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import Authprovider from './Compunent/Authprovider/Authprovider'
import 'react-toastify/dist/ReactToastify.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <Authprovider>
  <QueryClientProvider client={queryClient}>
  <App />
  </QueryClientProvider>
   </Authprovider>
    </ThemeProvider>
  </React.StrictMode>,
)
