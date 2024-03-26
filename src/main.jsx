import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/dharun.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import Login from './components/Login.jsx'
import NewUser from './components/NewUser.jsx'
import { TaskList } from './components/TaskList.jsx'
import Taskspage from './components/Taskspage.jsx'
import { TaskCompo } from './components/TaskCompo.jsx'
import { CreateForm } from './components/CreateForm.jsx'
import Addclass from './components/AddClass.jsx'

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/signUp',
        element:<NewUser/>
    },
    {
        path:'/home/:uid',
        element:<App/>,
        children:[
            {
                path:'/home/:uid/',
                element:<Body/>
            },
            {
                path:'/home/:uid/create-cls',
                element:<Addclass/>
            },
            {
                path:'/home/:uid/task/:id',
                element:<Taskspage/>,
                children:[
                    {
                        path:'/home/:uid/task/:id/',
                        element:<TaskList/>
                    },
                    {
                        path:'/home/:uid/task/:id/form',
                        element:<CreateForm/>
                    }
                ]
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={Router}/>
)

