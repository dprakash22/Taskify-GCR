import { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import {CreateForm} from './components/CreateForm'
import Taskspage from './components/Taskspage'
import NewUser from './components/NewUser'
import Login from './components/Login'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      {/* <Body/> */}
      {/* <Body/> */}
      {/* <CreateForm/> */}
      {/* <Taskspage/> */}
      {/* <Login/> */}
      {/* <NewUser /> */}
    </>
  )
}

export default App




