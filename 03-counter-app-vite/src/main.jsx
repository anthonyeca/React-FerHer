import React from 'react'
import ReactDOM from 'react-dom/client'
import { FirstApp } from './FirstApp'
// import { HelloWroldApp } from './HelloWroldApp'
import { CounterApp } from './CounterApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={20} />
    {/* <FirstApp title="Hola, Soy Vegeta" /> */}
  </React.StrictMode>
)
