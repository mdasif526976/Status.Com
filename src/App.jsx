import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main/Main'
import Home from './Compunent/Home/Home'
import Login from './Compunent/Authentication/Login/Login'
import SignUp from './Compunent/Authentication/SignUp/SignUp'
import PrivateRoute from './Compunent/PrivateRoute/PrivateRoute'
import About from './About/About'
import CardDetal from './Compunent/CardDetail/CardDetal'
const router = createBrowserRouter([
    {
      path:'/',
      element:<PrivateRoute><Main></Main></PrivateRoute>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/post/:id',
          element:<CardDetal/>,
          
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
