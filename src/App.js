import React from "react"
import Home from "./components/static/Home";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListWorkouts from "./components/workouts/ListWorkouts";
import NewWorkout from "./components/workouts/NewWorkout";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/workouts" element={<ListWorkouts />} />
        <Route path="/workouts/new" element={<NewWorkout />} />
        <Route exact path="/" element={<Home />} />
      </Routes>  
    </Router>
    
  );
}

export default App;
