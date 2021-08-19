import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main-menu/Main';
import Message from './Components/Message/Message';
import Music from './Components/Music/Music';
import News from './Components/News/News';




const App = () => {
  return (
    <BrowserRouter>
      <div className="body">
        <Header />
        <Sidebar />
        <div classNam="nav">
          <Route path="/Main" component={Main} />
          <Route path="/Message" component={Message} />
          <Route path="/Music" component={Music} />
          <Route path="/News" component={News} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;