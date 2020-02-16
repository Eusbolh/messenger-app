import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UtilityBar from 'components/utilityBar/UtilityBar.component';
import Chats from 'components/chats/Chats.component';

class Messenger extends Component {
  render() {
    return (
      <div className="c-messenger-module">
        <div className="c-messenger-content">
          <div className="c-messenger-left">
            <div className="c-messenger-utility-bar">
              <UtilityBar />
            </div>
            <div className="c-messenger-chats">
              <Chats />
            </div>
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
