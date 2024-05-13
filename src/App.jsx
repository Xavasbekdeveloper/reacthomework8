import { Fragment } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ShopAll from "./pages/shop all";
import Blog from "./pages/blog";
import About from "./pages/about";
import NotFound from "./pages/not-found/notFound.";
import Details from "./pages/single";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopAll />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
