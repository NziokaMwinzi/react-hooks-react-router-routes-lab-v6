import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';  // Import just the routes, not 'router'
import './index.css';  // Assuming your CSS is in this file

const router = createBrowserRouter(routes);  // Define router

// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);