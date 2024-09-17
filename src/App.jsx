import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Team from "./pages/Team";
import Shopping from "./pages/Shopping";
import Home from './pages/Home';
import Login from './pages/Login';
import samplePlayers from './data/players.json'; 
import Fixtures from './pages/Fixtures';
import News from './pages/News';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/team" element={<Team players={samplePlayers} />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blogpost" element={<BlogPost />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
