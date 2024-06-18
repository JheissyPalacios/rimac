import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Login from './pages/Login';
import './App.css';
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header/>
        <BrowserRouter>
          <Routes>
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
            <Route
              path="/*"
              element={
                <Login />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
