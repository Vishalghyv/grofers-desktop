import React, { useState } from "react";
import logo from "./groffery.jpg";
import "./App.css";
import FlipBook from "./FlipBook";
import {
  Badge,
  Button,
  Breadcrumb,
  Form,
  FormControl,
  ListGroup,
  ListGroupItem,
  Modal
} from "react-bootstrap";

import { Card as Cards } from "react-bootstrap";
import { Zoom } from "react-slideshow-image";

import { MemoryRouter, Switch, Route } from "react-router-dom";

import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <div className="header">
      <LinkContainer to="/">
        <div className="header-logo">
          <img src={logo} width="250" height="100" alt="logo" />
        </div>
      </LinkContainer>
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
            <img
              key={index}
              className="slideshow-image"
              src={each}
              alt="Flyer"
            />
          ))}
        </Zoom>
      </div>
    </div>
  );
}

const Card = ({ image, index, content }) => {
  var k = "/" + index;
  return (
    <LinkContainer to={k}>
      <div className="card-show">
        <div className="card-image">
          <img className="card-img" src={image} alt="Flyer" />
        </div>
        <div className="card-content"> {content}</div>
      </div>
    </LinkContainer>
  );
};

const Content = ({ heading, content, number }) => {
  return (
    <div className="card-detail">
      <div className="card-head">{heading}</div>
      <div className="card-cont">{content}</div>
      <div className="card-number">Phone No -{number}</div>
    </div>
  );
};

const ListElement = ({ children }) => {
  return <div className="list-element">{children}</div>;
};

function Lists() {
  return (
    <>
      <div className="list-header">
        <ListElement> Latest Catalog</ListElement>
        <ListElement> Popular Catalog</ListElement>
      </div>
      <div className="lists">
        <Card
          image={logo}
          index="123"
          content=<Content
            heading="Flyer Nayyme"
            content="detail about flyer"
            number="Phone Number or other detial"
          />
        />
        <Card
          image={logo}
          index="123"
          content=<Content
            heading="Flyer Name"
            content="detail about flyer"
            number="Phone Number or other detial"
          />
        />
        <Card
          image={logo}
          index="123"
          content=<Content
            heading="Flyer Name"
            content="detail about flyer"
            number="Phone Number or other detial"
          />
        />
        <Card
          image={logo}
          index="123"
          content=<Content
            heading="Flyer Name"
            content="detail about flyer"
            number="Phone Number or other detial"
          />
        />
        <Card
          image={logo}
          index="123"
          content=<Content
            heading="Flyer Name"
            content="detail about flyer"
            number="Phone Number or other detial"
          />
        />
        <Card
          image={logo}
          index="123"
          content=<Content
            heading="Flyer Name"
            content="detail about flyer"
            number="Phone Number or other detial"
          />
        />
      </div>
    </>
  );
}

function Footer() {
  return <div className="footer">Footer</div>;
}

function Home() {
  return (
    <>
      <SlideShow />
    </>
  );
}

const CheckoutImage = ({ image }) => {
  return (
    <div clasName="checkout-img">
      <Cards
        style={{
          width: "30rem",
          height: "35rem",

          padding: "1rem"
        }}
      >
        <Cards.Img
          variant="top"
          src={image}
          height="90%"
          style={{ border: "1px solid lightgrey" }}
        />
        <Cards.Body>
          <Cards.Text style={{ textAlign: "center" }}>View FULL</Cards.Text>
        </Cards.Body>
      </Cards>
    </div>
  );
};
const CheckoutDetail = ({ heading, content, number }) => {
  return (
    <div className="checkout-detail">
      <div className="checkout-head">
        <h2>
          {heading}{" "}
          <Badge variant="warning" style={{ color: "white" }}>
            New
          </Badge>
        </h2>
      </div>
      <h4>{content}</h4>
      <div className="checkout-number">Phone No -{number}</div>
      <br />
      <br />
      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>

      <br />
      <div style={{ textAlign: "center" }}>
        <Button variant="warning">Checkout Full</Button>
      </div>
    </div>
  );
};
const CheckoutSide = ({ index }) => {
  return (
    <Cards style={{ width: "18rem" }}>
      <Cards.Img variant="top" src={logo} />
      <Cards.Body>
        <Cards.Title>Store Page</Cards.Title>
        <Cards.Text>
          Follow us on Facebook to get Catalogs & Offers at once!
        </Cards.Text>
      </Cards.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Some Other Detail</ListGroupItem>
        <ListGroupItem>Some Other Detail</ListGroupItem>
        <ListGroupItem>Some Other Detail</ListGroupItem>
      </ListGroup>
      <Cards.Body>
        <Cards.Link href="#">Link</Cards.Link>
        <Cards.Link href="#">Another Link</Cards.Link>
      </Cards.Body>
    </Cards>
  );
};

const Checkout = ({ index }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Breadcrumb className="checkout-bread">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Flyer Name</Breadcrumb.Item>
      </Breadcrumb>
      <div className="checkout-container">
        <div style={{ cursor: "pointer" }} onClick={handleShow}>
          <CheckoutImage image={logo} />
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          dialogClassName="modal-90w"
          size="xl"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Flyer Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FlipBook />
          </Modal.Body>
        </Modal>
        <CheckoutDetail
          heading="Flyer Name"
          content="detail about flyer"
          number="Phone Number or other detial"
        />
        <CheckoutSide />
      </div>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <MemoryRouter>
        <Header />
        <NavBar />
        <Switch>
          <Route path="/123">
            <Checkout index="123" />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Lists />
        <Footer />
      </MemoryRouter>
    </div>
  );
}

export default App;
