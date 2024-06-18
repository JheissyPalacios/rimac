import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import AppContext from "./context/AppContex";
import Login from './pages/Login';
import './App.css';
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <AppContext.Provider>
        <BrowserRouter>
          <Routes basename="/rimac">
            <Route
              path="/"
              element={
                <Login />
              }
            ></Route>
            <Route
              path="/home"
              element={
                <Home />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </ AppContext.Provider>
    </div>
  );
}

export default App;
