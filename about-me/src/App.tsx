import './App.css';
import './index.css';

// pages
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Favorites from "./pages/Favorites";
import RecipeBook from "./pages/Recipes";
import Connect from "./pages/Connect";
import PageNotFound from "./pages/PageNotFound";

// components
import Navbar from './components/Navbar';

// other imports
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes/>} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/recipe-book" element={<RecipeBook />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
      </BrowserRouter>
  )
}

export default App

/*
            <Route path="/goals" element={<Goals />} />
*/