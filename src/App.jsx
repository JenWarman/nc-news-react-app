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
import NotFound from "./components/NotFound";
import ListArticlesByQuery from "./components/ListArticlesByQuery";

function App() {
  return (
    <div className="app">
      <UserLogin />
      <Header />
      <Nav />
      <Routes>
        <Route path="/topic/:topic" element={<TopicPage />}></Route>
        <Route path="/sort_by/:query" element={<ListArticlesByQuery />}></Route>
        <Route
          path="/article/:article_id"
          element={<SingleArticleCard />}
        ></Route>
        <Route path="/" element={<ListArticles />}></Route>
        <Route path="/404" element={<NotFound />} />
        <Route path="/500" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
