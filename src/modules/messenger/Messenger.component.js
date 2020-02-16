import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UtilityBar from 'components/utilityBar/UtilityBar.component';
import ChatContainer from 'components/chat/Chat.container';
import ChatsContainer from 'components/chats/Chats.container';

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
              <ChatsContainer />
            </div>
          </div>
          <div className="c-messenger-right">
            <div className="c-messenger-chat-content">
              <ChatContainer />
            </div>
          </div>
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
