import React from 'react';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="nav">
        <ul>
          <li><a href="/register" class="signUpBTN btnNav">Sign Up</a></li>
          <li><a href="/login" class="logInBTN btnNav">Log In</a></li>
        </ul>
      </div>
    <div className="container">
        <h1 class="title" >KAVACH</h1>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/chat" element={<><Sidebar /><ChatArea /></>} /> */}
      </Routes>
      <div className="about-us">
      <h2>About US</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil porro
        molestias vel possimus doloribus suscipit rerum eius quod odio fugit
        ipsa nisi nemo cupiditate earum, itaque quis aspernatur ea architecto
        dolore. Itaque magnam molestiae nulla numquam? Saepe, quo! Tempora
        similique temporibus ducimus natus dolor explicabo necessitatibus a
        laboriosam nostrum excepturi quaerat voluptate at rem dolore ipsa ea,
        veritatis facere fugiat nisi architecto ipsum vel quam quas consectetur!
        Porro nobis doloremque, ratione corporis laudantium impedit delectus
        eos, aspernatur sunt sapiente et tempora illum, a laboriosam quis ad!
        Deserunt quidem neque optio quaerat sapiente ipsam voluptatum rerum non
        ditiis iste quam debitis
        sunt aliquam aut, inventore ab repellendus?
      </p>
    </div>    
    <div className="demo"> 
      <h2>Demo of the Project </h2>
      <div className="demo-container">
        <div className="yellow-box">
          <h2>yellow box</h2>
        </div>
        <div className="red-box">
          <h2>red box</h2>
        </div>
      </div> 
    </div>

    </BrowserRouter>
  );
}

export default App;
