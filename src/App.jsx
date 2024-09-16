import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import ListArticles from './components/ListArticles'
import UserLogin from './components/UserLogin'

function App() {
  
  return (
    <>
    <UserLogin />
    <Header />
    <Nav />
    <ListArticles />
    <Footer />
    </>
  )
}

export default App
