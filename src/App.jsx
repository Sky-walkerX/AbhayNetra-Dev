import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/DBoard';
import { AppLayout } from './components/AppLayout';
import { Home } from "./pages/Home";



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "auth",
        element: <AuthPage/>
      },
      {
        path: "dashboard",
        element: <Dashboard/>
      },
      
    ]
  }
 
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};

export default App;