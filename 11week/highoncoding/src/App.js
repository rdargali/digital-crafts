import React from 'react';
import './App.css';
import Header from "./Header"
import Curse from "./Curse"
import Article from "./Article"

function App() {
  return (
    <>
      <Header />
      <Curse />
      <Article className ="Article" Title="Hello WatchKit" Text="Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch." Comments="12" Likes="124"/>
      <Article className ="Article" Title="Introduction to Swift" Text="Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started. " Comments="15" Likes="45"/>

    </>
  );
}

export default App;
