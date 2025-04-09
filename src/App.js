import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/core/NavBar';
import WebsitePage from './components/core/WebsitePage';
import Footer from './components/core/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<WebsitePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
