import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/login/Login';
import ChatBot from './Components/chatbot/ChatBot';

function App() {
  return (
    
      <BrowserRouter >
        
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/chatbot' element={<ChatBot/>} />
        </Routes>
      </BrowserRouter>
     
    
  );
}

export default App;
