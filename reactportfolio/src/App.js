import React from 'react';
import Header from "./Components/header/Header";
import Projects from "./Components/projects/Projects";
import Footer from "./Components/footer/Footer";
import Introduction from "./Components/introduction/Introduction";
import Contact from "./Components/contact/Contact";

function App() {
  return (
    <div className="app">
      <Header/> 
      <div className="sections">
      <Introduction/>
      <div className="sections">
      <Projects/>
      <div className="sections">
      <Contact/>
      <div className="footer">
      <Footer/> 
    </div>
    </div>
    </div>
    </div> 
    </div>
  );
}

export default App;