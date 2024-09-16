import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ListArticles from "./components/ListArticles";
import UserLogin from "./components/UserLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from 'react-router-dom'
import SingleArticleCard from "./components/SingleArticleCard";

function App() {
  return (
    <>
      <UserLogin />
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ListArticles/>}></Route>
        <Route path="/:article_id" element={<SingleArticleCard />}></Route>
      </Routes>
      <ListArticles />
      <Footer />
    </>
  );
}

export default App;
