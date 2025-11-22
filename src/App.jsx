import React from "react";
import "./App.css";
import Nav from "./Nav";
import Movies from "./Movies";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import SeatSelection from "./SeatSelection";
import Timings from "./Timings";
import Payment from "./Payment";
import Scanner from "./Scanner";   
import Signup from "./Signup";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/moviesDetails/:id" element={<MovieDetails />} />
        <Route path="/SeatSelection" element={<SeatSelection />} />
        <Route path="/Timing" element={<Timings />} />
        <Route path="/payment" element={<Payment />} />
        <Route path='/signup' element={<Signup/>}/>

       
        <Route path="/scanner" element={<Scanner />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
