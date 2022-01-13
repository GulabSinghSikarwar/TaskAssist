import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainHeader from './components/MainHeader';

import { Link, Route, Routes } from "react-router-dom";
import ShowTask from './components/Pages/ShowTask/showTask';
import TaskAccomplished from './components/Pages/task Accomplished/TaskAccomplished'
import AddTask from './components/Pages/AddTask/addTask';
import SignUp from './components/Pages/SignUp/SignUp';
import LogIn from './components/Pages/LogIn/LogIn';
import AuthContext from './components/store/context';
import AddTaskContextProvider from './components/Pages/AddTask/contextStore/AddTaskContextProvider';



function App() {
  const context = useContext(AuthContext)

  return (
    <div className="App">
      <MainHeader />
      <Routes>


        {
          context.isLoggedIn && <Route path="/showTask" element={<ShowTask />}></Route>
        }
        {
          context.isLoggedIn && <Route path="/accomplishedTask" element={<TaskAccomplished />}></Route>
        }
        {
          context.isLoggedIn && <Route path="/addTask" element={<AddTaskContextProvider> <AddTask /> </AddTaskContextProvider>}></Route>
        }
        <Route path="/signUp" element={<SignUp />}></Route>

        <Route path="/logIn" element={<LogIn />}></Route>


      </Routes>

    </div>
  );
}

export default App;
