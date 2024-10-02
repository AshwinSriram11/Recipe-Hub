import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import RecipeMain from "./Components/RecipeMain";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={SearchBar} />
        <Route path="/recipe/:id" Component={RecipeMain} />
        <Route path="/about" Component={About} />
        <Route path="*" Component={NotFound} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
