import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home from '../Home/Home';
import News from '../New/News';
import Catagorys from '../Catagorys/Catagorys';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';



  export  const Router=createBrowserRouter([
        {path:'/',
         element:<Main></Main>,
         children:[
            {path:'/',
             element:<Home></Home>,
             loader:()=>fetch(`http://localhost:5000/News`)
             },
            {path:'/Catagory/:id',
             element:<PrivateRoute><Catagorys></Catagorys></PrivateRoute>,
             loader:({params})=>fetch(`http://localhost:5000/catagory/${params.id}`)
            },
            {path:'/News/:id',
             element:<News></News>,
             loader:({params})=>fetch(`http://localhost:5000/News/${params.id}`)
            },
            {
               path:'Login',
               element:<Login></Login>,
            },
            {
               path:'Register',
               element:<Register></Register>
            }
         ]
        }

    ])

