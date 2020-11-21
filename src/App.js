import React from "react";

import ReactGA from "react-ga"; 
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";

// Screens
import Home from "./screens/Home";
import About from "./screens/About";
import Apps from "./screens/Apps";
import Journal from "./screens/Journal";
import Faqs from "./screens/Faqs";
import Contact from "./screens/Contact";

function App() {
  const history = createBrowserHistory();

  history.listen(location => {
    ReactGA.initialize('your tracking Id');
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });

  // useEffect(() => {
  //   ReactGA.initialize('UA-180815299-1');
  //   ReactGA.pageview(window.location.pathname);
  // })


  return (
    <Router history={history}>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/apps" component={Apps} />
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
