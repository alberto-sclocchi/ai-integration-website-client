import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/core/NavBar';
import WebsitePage from './components/core/WebsitePage';
import Footer from './components/core/Footer';
import { MessageProvider } from './components/message/context/MessageContext.context';
import MessagesList from './components/message/MessagesList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MessageProvider>
        <Routes>
          <Route exact path="/" element={<WebsitePage />} />
          {/* <Route exact path="/messages" element={<MessagesList />} /> */}
        </Routes>
      </MessageProvider>
      <Footer />
    </div>
  );
}

export default App;
