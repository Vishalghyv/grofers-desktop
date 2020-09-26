import React from "react";
import logo from "./groffery.jpg";
import left from "./left-arrow.svg";
import right from "./right-arrow.svg";
import "./App.css";
import { Button, Form, FormControl } from "react-bootstrap";
import { Zoom } from "react-slideshow-image";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} width="250" height="100" alt="logo" />
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

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 800,
  infinite: true,

  scale: 0.7,
  arrows: true
};
const images = [logo, logo, logo, logo, logo];
function SlideShow() {
  return (
    <div className="slide">
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {images.map((each, index) => (
            <img key={index} className="slideshow-image" src={each} />
          ))}
        </Zoom>
      </div>
    </div>
  );
}

const Card = ({ image, content }) => {
  return (
    <div className="card-show">
      <div className="card-image">
        <img className="card-img" src={image} />
      </div>
      <div className="card-content">{content}</div>
    </div>
  );
};

const Content = ({ heading, content, number }) => {
  return (
    <div className="card-detail">
      <div className="card-head">
        {heading}
      </div>
      <div className="card-cont">
        {content}
      </div>
      <div className="card-number">
        Phone No -{number}
      </div>
    </div>
  );
};



function Lists() {
  return (
    <div className="lists">
      <Card image={logo} content=<Content heading ="Flyer Name" content="detail about flyer" number="Phone Number or other detial"/> />
      <Card image={logo} content=<Content heading ="Flyer Name" content="detail about flyer" number="Phone Number or other detial"/> />
      <Card image={logo} content=<Content heading ="Flyer Name" content="detail about flyer" number="Phone Number or other detial"/> />
      <Card image={logo} content=<Content heading ="Flyer Name" content="detail about flyer" number="Phone Number or other detial"/> />
      <Card image={logo} content=<Content heading ="Flyer Name" content="detail about flyer" number="Phone Number or other detial"/> />
      <Card image={logo} content=<Content heading ="Flyer Name" content="detail about flyer" number="Phone Number or other detial"/> />

    </div>
  );
}

function Footer () {
  return (
    <div className="footer">
      Footer
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <SlideShow />
      <Lists />
      <Footer />
    </div>
  );
}

export default App;
