import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { appendClasses } from 'common/helpers';

class Button extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <button
        className={appendClasses('c-button-component', props.classes)}
        onClick={props.onClick}
        type="button"
      >
        {props.children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  classes: null,
  onClick: null,
};

export default Button;
