import React from "react";
import PropTypes from "prop-types";
import { SketchPicker } from "react-color";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = {};

  render() {
    return (
      <React.Fragment>
        <SketchPicker />
      </React.Fragment>
    );
  }
}

ColorPicker.propTypes = {};

export default ColorPicker;
