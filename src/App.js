import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import RecipeMain from "./Components/RecipeMain";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route exact path="/" element={<SearchBar />} />
            <Route path="/recipe/:id" element={<RecipeMain />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
