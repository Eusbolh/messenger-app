import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserAvatar from 'common/assets/user_avatar_2.png';
import Button from 'components/button/Button.component';
import { appendClasses } from 'common/helpers';

const chats = [
  {
    id: 'asdsadasdsadsad',
    contactName: 'Lorem Ipsum',
    lastMessageContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    lastMessageDate: '2 hours ago',
  }, {
    id: 'qweqewqeqe',
    contactName: 'Lorem Ipsum',
    lastMessageContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    lastMessageDate: '2 hours ago',
  },
];

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
          <div className="c-chats-chat-contact-name">{chat.contactName}</div>
          <div className="c-chats-chat-last-message-date">{chat.lastMessageDate}</div>
        </div>
        <div className="c-chats-chat-last-message">{chat.lastMessageContent}</div>
      </div>
    </Button>
  )

  render() {
    return (
      <div className="c-chats-component">
        <div className="c-chats-list">
          {chats.map(chat => this.renderChat(chat))}
        </div>
      </div>
    );
  }
}

Chats.propTypes = {
  /* Objects */
  selectedChatID: PropTypes.string,
  /* Functions */
  selectChat: PropTypes.func.isRequired,
};

Chats.defaultProps = {
  selectedChatID: null,
};

export default Chats;
