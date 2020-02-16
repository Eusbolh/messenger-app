import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserAvatar from 'common/assets/user_avatar_2.png';

class Chat extends Component {
  renderChatHead = chat => (
    <div className="c-chat-head">
      <div className="c-chat-contact-avatar-container">
        <img
          alt="contact-avatar"
          className="c-chat-contact-avatar"
          src={UserAvatar}
        />
      </div>
      <div className="c-chat-head-info">
        <div className="c-chat-contact-name">test</div>
        <div className="c-chat-contact-status">Online</div>
      </div>
    </div>
  )

  render() {
    return (
      <div className="c-chat-component">
        {this.renderChatHead()}
        <div className="c-chat-messages">asd</div>
        <div className="c-chat-new-message">asd</div>
      </div>
    );
  }
}

Chat.propTypes = {
  /* Objects */
  chat: PropTypes.shape({}).isRequired,
};

Chat.defaultProps = {
};

export default Chat;
