import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ListArticles from "./components/ListArticles";
import UserLogin from "./components/UserLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import SingleArticleCard from "./components/SingleArticleCard";
import TopicPage from "./components/TopicPage";


function App() {
  return (
    <div className="app">
      <UserLogin />
      <Header />
      <Nav />
      <Routes>
        <Route path="/topic/:topic" element={<TopicPage/>}></Route>
        <Route path="/" element={<ListArticles />}></Route>
        <Route path="/article/:article_id" element={<SingleArticleCard />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
