import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { ShopContextProvider } from './context/ShopContext'
import Layout from './layouts/Main'
import TopNav from './components/TopNav'

function App() {
  return (
    <BrowserRouter>
      <ShopContextProvider>
        <header>
          <TopNav />
        </header>
        <main>
          <Layout />
        </main>
      </ShopContextProvider>
    </BrowserRouter>
  )
}

export default App
