import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserAvatar from 'common/assets/user_avatar_2.png';
import Button from 'components/button/Button.component';
import { appendClasses } from 'common/helpers';

class Chats extends Component {
  isChatSelected = chatID => this.props.selectedChatID === chatID;

  selectChat = (chatID) => {
    this.props.selectChat({ chatID });
  }

  renderChat = chat => (
    <Button
      classes={appendClasses('c-chats-chat', this.isChatSelected(chat.id) ? 'c-chats-chat--selected' : null)}
      key={chat.id}
      onClick={() => this.selectChat(chat.id)}
    >
      <div className="c-chats-chat-contact-avatar-container">
        <img
          alt="contact-avatar"
          className="c-chats-chat-contact-avatar"
          src={UserAvatar}
        />
      </div>
      <div className="c-chats-chat-content">
        <div className="c-chats-chat-info">
          <div className="c-chats-chat-contact-name">
            {
              chat
              && chat.users
              && chat.users
                .filter(userID => userID !== this.props.userID)
                .map((user, index) => {
                  if (index === chat.users.length - 2) {
                    return user;
                  }
                  return `${user}, `;
                })
            }
          </div>
          <div className="c-chats-chat-last-message-date">
            {
              chat
              && chat.messages
              && chat.messages[chat.messages.length - 1]
              && chat.messages[chat.messages.length - 1].timestamp
            }
          </div>
        </div>
        <div className="c-chats-chat-last-message">
          {
            chat
            && chat.messages
            && chat.messages[chat.messages.length - 1]
            && chat.messages[chat.messages.length - 1].message
          }
        </div>
      </div>
    </Button>
  )

  render() {
    const { ...props } = this.props;
    return (
      <div className="c-chats-component">
        <div className="c-chats-list">
          {props.chats
            .filter(chat => chat && chat.users.includes(props.userID))
            .map(chat => this.renderChat(chat))}
        </div>
      </div>
    );
  }
}

Chats.propTypes = {
  /* Objects */
  chats: PropTypes.arrayOf(PropTypes.shape({})),
  selectedChatID: PropTypes.string,
  userID: PropTypes.string,
  /* Functions */
  selectChat: PropTypes.func.isRequired,
};

Chats.defaultProps = {
  chats: null,
  selectedChatID: null,
  userID: null,
};

export default Chats;
