import React from "react";
import logo from "./logo.png";
import left from "./left-arrow.svg";
import right from "./right-arrow.svg";
import "./App.css";
import { Button, Form, FormControl } from "react-bootstrap";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-search">
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search Something else?"
            className="mr-sm-2"
          />
          <Button variant="success">Search</Button>
        </Form>
      </div>
    </div>
  );
}

const Element = ({ children }) => {
  return <div className="navbar-element">{children}</div>;
};

function NavBar() {
  return (
    <div className="navbar-header">
      <Element> Home</Element>
      <Element> About Us</Element>
      <Element> Catalogs</Element>
      <Element> Stores</Element>
      <Element> Blog</Element>
      <Element> Contact Us</Element>
    </div>
  );
}

function SlideShow() {
  return (
    <div className="slideshow-container slideshow">
      <div className="slideshow-arrow slideshow-left">
        <img src={left} alt="left" width="30" />
      </div>
      <div className="slideshow-first">
        <img src={logo} alt="logo" />
      </div>
      <div className="slideshow-mid">
        <img src={logo} alt="logo" />
      </div>
      <div className="slideshow-last">
        <img src={logo} alt="logo" />
      </div>
      <div className="slideshow-arrow slideshow-right">
        <img src={right} alt="right" width="30" />
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <SlideShow />
    </div>
  );
}

export default App;
