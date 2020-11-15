import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";

// Screens
import Home from "./screens/Home";
import About from "./screens/About";
import Works from "./screens/Works";
import Journal from "./screens/Journal";
import Faqs from "./screens/Faqs";
import Contact from "./screens/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/works" component={Works} />
        <Route path="/journal" component={Journal} />
        <Route path="/faqs" component={Faqs} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <BackToTop />
      <Footer />
    </Router>
  );
}

export default App;
