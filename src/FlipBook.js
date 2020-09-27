import React, { Component } from "react";
import FlippingPages from "flipping-pages";
/* IMPORTANT */
import "flipping-pages/FlippingPages.css";

import { Button } from "react-bootstrap";

import "./FlipBook.css";
import one from "./flip-1.jpg";
import second from "./flip-2.jpg";
import third from "./flip-3.jpg";
import fourth from "./flip-4.jpg";

const images = [one, second, third, fourth];
class FlipBook extends Component {
  constructor(props) {
    super(props);
    this.totalPages = 3;
    this.state = {
      selected: 0
    };
    this.handleSelectedChange = this.handleSelectedChange.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  handleSelectedChange(selected) {
    this.setState({ selected });
  }

  previous() {
    this.setState((state) => ({
      selected: state.selected - 1
    }));
  }

  next() {
    this.setState((state) => ({
      selected: state.selected + 1
    }));
  }

  render() {
    return (
      <div className="FlipBook">
        <FlippingPages
          className="App-pages"
          direction="horizontal"
          selected={this.state.selected}
          onSelectedChange={this.handleSelectedChange}
          /* touch-action attribute is required by pointer events
                    polyfill */
          touch-action="none"
        >
          <div className="App-page App-page_red">
            <img src={images[0]} width="50%" height="100%" alt="logo" />
            <img src={images[1]} width="50%" height="100%" alt="logo" />
          </div>
          <div className="App-page App-page_green">
            <img src={images[2]} width="50%" height="100%" alt="logo" />
            <img src={images[3]} width="50%" height="100%" alt="logo" />
          </div>
          <div className="App-page App-page_red">
            <img src={images[0]} width="50%" height="100%" alt="logo" />
            <img src={images[1]} width="50%" height="100%" alt="logo" />
          </div>
        </FlippingPages>
        {/* Buttons are required for keyboard navigation */}
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            onClick={this.previous}
            disabled={!this.state.selected}
            variant="success"
          >
            Previous
          </Button>

          <Button
            onClick={this.next}
            disabled={this.state.selected + 1 === this.totalPages}
            variant="success"
          >
            Next
          </Button>
        </div>
      </div>
    );
  }
}

export default FlipBook;
