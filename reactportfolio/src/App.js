import React from 'react'
import Header from "./Components/header/Header";
import Projects from "./Components/projects/Projects";
import Footer from "./Components/footer/Footer";
import Introduction from "./Components/introduction/Introduction";
import "./app.css"

function App() {
  return (
    <div className="app">
      <Header/> 
      <div className="sections">
      <Introduction/>
      <div className="sections">
      <Projects />
      <div className="sections">
      </div>
      <Footer/>
    </div>
    </div> 
    </div>
  );
}

export default App;