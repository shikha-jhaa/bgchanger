import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

// Create a JSX element to render
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Render the JSX element using ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(rootElement);

// Check if any element in the document has focus
const focusedElement = document.activeElement;

if (focusedElement) {
    console.log("The currently focused element is:", focusedElement);
} else {
    console.log("No element currently has focus.");
}


