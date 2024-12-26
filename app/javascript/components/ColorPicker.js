import React from "react";
import PropTypes from "prop-types";
import { SketchPicker } from "react-color";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (color) => {
    console.log(color.hex);
  }

  render() {
    return (
      <React.Fragment>
        <SketchPicker color={this.props.color} onChange={this.handleChange} />
      </React.Fragment>
    );
  }
}

ColorPicker.propTypes = {};

export default ColorPicker;
