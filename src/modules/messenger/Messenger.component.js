import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Messenger extends Component {
  render() {
    return (
      <div className="c-messenger-module">
        <div className="c-messenger-content">
          <div className="c-messenger-left">
            <div className="c-messenger-utility-bar">utility bar</div>
            <div className="c-messenger-people">people</div>
          </div>
          <div className="c-messenger-right">right</div>
        </div>
      </div>
    );
  }
}

Messenger.propTypes = {
};

Messenger.defaultProps = {
};

export default Messenger;
