import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

function Page() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

//ReactDOM.render(<Page />, document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
