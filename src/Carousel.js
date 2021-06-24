import React from 'react';
import logo from './logo.svg';
import './App.css';

class Carousel extends React.Component {
  state = {
    counter: 0,
  };

  handleClickLeft = () => {
    this.counter === 0
      ? this.setState({ counter: this.props.imgs.length - 1 })
      : this.setState({ counter: (this.state.counter -= 1) });
  };
  handleClickRight = () => {
    this.state.counter === this.props.imgs.length - 1
      ? this.setState({ counter: 0 })
      : this.setState({ counter: (this.state.counter += 1) });
  };

  render() {
    return (
      <div className="carousel-item-acvite">
        <button onClick={this.handleClickLeft} className="control-prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <img src={this.props.imgs[this.state.counter]} alt=""></img>
        <button onClick={this.handleClickRight} className="control-next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    );
  }
}

export default Carousel;
