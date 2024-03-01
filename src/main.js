import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// Check if any element in the document has focus
const focusedElement = document.activeElement;

if (focusedElement) {
    console.log("The currently focused element is:", focusedElement);
} else {
    console.log("No element currently has focus.");
}


