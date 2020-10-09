import React from "react";
import "./App.css";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import About from "./components/about/About";
import ProjectList from "./components/projects/ProjectList";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
