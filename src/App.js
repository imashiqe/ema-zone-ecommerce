// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Error404 from './components/Error404/Error404';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';
import Main from './layouts/Main';
import {productsAndCartLoader} from './loaders/productsAndCartLoader';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/shop',
          loader: () =>  fetch('products.json'),
          element: <Shop></Shop> 
        },
        {
          path:'orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: 'about',
      element:<About></About>
    },

    {
      path: '*',
      element: <Error404></Error404>
    }
  ])
  return (
    <div >
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
