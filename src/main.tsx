import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.scss';
import Router from './router/Router'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
