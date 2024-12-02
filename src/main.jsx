import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root';
import Home from './Home/Home';
import Readpages from './Readpages/Readpages';
import ErrorPage from './ErrorPage/ErrorPage';
import BookDetails from './BookDetails/BookDetails';
import ListedBook from './ListedBook/ListedBook';
import Author from './Author/Author';
import About from './About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/read',
        element: <Readpages></Readpages>
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/listed',
        element: <ListedBook></ListedBook>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/author',
        element: <Author></Author>
      },
      {
        path: '/about',
        element: <About></About>
        // loader: () => fetch('/books.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
