import React from "react"
import Home from "./components/static/Home";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListRecipes from "./components/recipes/ListRecipes";
import NewRecipe from "./components/recipes/NewRecipe";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/recipes" element={<ListRecipes />} />
        <Route path="/recipes/new" element={<NewRecipe />} />
        <Route exact path="/" element={<Home />} />
      </Routes>  
    </Router>
    
  );
}

export default App;
