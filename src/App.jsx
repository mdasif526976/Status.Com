import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main/Main'
import Home from './Compunent/Home/Home'
import Login from './Compunent/Authentication/Login/Login'
import SignUp from './Compunent/Authentication/SignUp/SignUp'
const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
       
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<SignUp/>
    }
  
])
function App() {

  return (
    <div className="App">
       <RouterProvider router={router}/>
    </div>
  )
}

export default App
