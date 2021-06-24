import React from 'react';
import logo from './logo.svg';
import './App.css';

class ClickablePicture extends React.Component {
  state = {
    img: this.props.img,
    click: false,
  };

  changeImg = () => {
    this.setState({
      click: !this.state.click,
    });
  };

  render() {
    return (
      <div className="clickable">
        <img
          src={!this.state.click ? this.props.img : this.props.imgClicked}
          alt=""
          onClick={this.changeImg}
        />
      </div>
    );
  }
}

export default ClickablePicture;
