import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Users from './Pages/Users';
import CreateUser from './Pages/CreateUser';
import EditUser from './Pages/EditUser';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  const[userid,setUserId] = useState(0);
  return (
    <div>
      <BrowserRouter>
      <div>
        <Header/>
      </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<Users setUserId={setUserId}/>}/>
          <Route path="/createuser" element={<CreateUser/>}/>
          <Route path="/edituser/:id" element={<EditUser userid={userid}/>}/>
        </Routes>
        <div>
        <Footer/>
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;