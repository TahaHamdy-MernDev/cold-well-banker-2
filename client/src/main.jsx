import React from 'react';
import { createRoot } from 'react-dom/client';
// import '../styles/index.css';
import './styles/index.css'
import App from './App/App';

const container = document.getElementById("root");
if (!container) throw new Error("container not found");

const root = createRoot(container);
root.render(<App />);
