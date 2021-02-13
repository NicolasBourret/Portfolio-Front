import React, { useState } from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/home/Home";
import Project from "./pages/project/Project";
import Projects from "./pages/projects/Projects";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App({ location }) {
  const [dark, setDark] = useState(false);

  const handleDark = (bool) => {
    setDark(bool);
  };

  return (
    <Router>
      <div className="app">
        <Header dark={dark} handleDark={handleDark} />
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/project">
                  <Project />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </AnimatePresence>
          )}
        />
        <Footer dark={dark} />
      </div>
    </Router>
  );
}

export default App;
