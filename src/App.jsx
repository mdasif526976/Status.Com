import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main/Main'
import Home from './Compunent/Home/Home'
const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        }
      ]
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
