import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CardList from './components/ArticleList';
// import HeaderContainer from './components/HeadContainer';
import Navbar from './components/Nav';
import Card from "./components/ArticleCard";
import FullCard from "./components/FullArticleCard";
import Topic from "./components/Topic";

function App() {
  return (
    <div className="App-Container">
      
      <Navbar />
      <Routes>
        <Route
    path='/articles'
    // element={ <Card 
    //   Title='Test 1' 
    //   Author='author test'
    //   date='today'/>}
    element={<CardList />}
/>
<Route
    path='/articles/:article_id'
    
    element={<FullCard />}
/>
<Route
path='/articles/topics/:topic'
    element={<Topic />}
/>
      </Routes>
      
      
    </div>
  );
}

export default App;
