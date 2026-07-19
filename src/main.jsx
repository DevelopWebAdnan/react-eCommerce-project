import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import { ToastContainer } from 'react-toastify';
import AllProducts from './components/AllProducts/AllProducts';
import { HelmetProvider } from 'react-helmet-async';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/beautyStore.json'),
        children: [
          {
            path: '/',
            element: <Products></Products>
          },
          {
            path: '/products/:category',
            element: <Products></Products>
          },
        ]
      },
      {
        path: 'productDetail/:id',
        element: <ProductDetail></ProductDetail>,
        loader: () => fetch('/beautyStore.json')
      },
      // {
      //   path: '/dashboard',
      //   element:
      // }
      {
        path: 'allProducts',
        element: <AllProducts></AllProducts>,
        loader: () => fetch('/beautyStore.json')
      },
      {
        path: 'cart',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: () => fetch('/beautyStore.json')
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer></ToastContainer>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
