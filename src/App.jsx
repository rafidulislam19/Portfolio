import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'


function App() {

  return (
    <>
      <Header />

      <main className="main">
        <Home />
      </main>
    </>
  )
}

export default App
