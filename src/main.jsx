/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./TicTacToe-style.css";

import TicTacToe from "./TicTacToe";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <TicTacToe />
  </StrictMode>
);