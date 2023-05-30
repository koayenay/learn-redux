import Product from "./components/Product"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import "./App.css"
import Dashboard from "./components/Dashboard"
import RootLayout from "./components/RootLayout"
import Cart from "./components/Cart"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Route>
    )
  )
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
