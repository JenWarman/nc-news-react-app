import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import ListArticles from './components/ListArticles'

function App() {
  
  return (
    <>
    <Header />
    <Nav />
    <ListArticles />
    <Footer />
    </>
  )
}

export default App
