import React from 'react';
import Navbar from "./component/navbar";
import Contect from "./component/contect";
import {Route , Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" Component={Navbar}></Route>
      <Route path="/contect" Component={Contect}></Route>
    </Routes>
    {/*<Navbar />
    <Contect/>*/}

    </>
  );
}

export default App;
