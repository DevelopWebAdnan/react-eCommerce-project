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
        path: 'products/:id',
        element: <ProductDetail></ProductDetail>,
        loader: () => fetch('/beautyStore.json')
      },
      // {
      //   path: '/dashboard',
      //   element:
      // }
      {
        path: '/allProducts',
        element: <AllProducts></AllProducts>,
        loader: () => fetch('/beautyStore.json')
      },
      {
        path: 'cart',
        element: <Cart></Cart>,
        loader: () => fetch('/beautyStore.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
