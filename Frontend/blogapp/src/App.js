// App.js

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import Navbar from './pages/Navbar';
import WritingPage from './pages/Writtingpage'; 
import Dialogflow  from './pages/Dialogflow';

function App() {
  return (
    <Router>
      <Navbar />
   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/articles" element={<ArticlesListPage />} />
        <Route path="/articles/:articleId" element={<ArticlePage />} />
        <Route path="/writing" element={<WritingPage />} />
      </Routes>
      <Dialogflow />
    </Router>
  );
}

export default App;
