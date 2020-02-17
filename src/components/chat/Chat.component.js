import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserAvatar from 'common/assets/user_avatar_2.png';
import { appendClasses } from 'common/helpers';

class Chat extends Component {
  state = {
    message: '',
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.selectedChatID !== this.props.selectedChatID) {
      this.scrollToBottom();
    }
  }

  getContactName = (chats, chatID, userID) => {
    const selectedChat = chats && chats.find(chat => chat.chatID === chatID);
    if (!selectedChat) {
      return '-';
    }
    const { users } = selectedChat;
    if (users) {
      const filteredUsers = users.filter(id => id !== userID);
      return filteredUsers.map((user, index) => {
        if (index === users.length - 2) {
          return user;
        }
        return `${user}, `;
      });
    }
    return '-';
  }

  handleInputChange = (e) => {
    this.setState({ message: e.target.value });
  }

  scrollToBottom = () => {
    const messagesDiv = document.getElementById('c-chat-messages');
    if (messagesDiv) {
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
  }

  sendMessage = (e) => {
    e.preventDefault();
    this.props.sendMessage({
      chatID: this.props.selectedChatID,
      senderID: this.props.userID,
      message: this.state.message,
    });
    this.setState({ message: '' });
    this.scrollToBottom();
  }

  renderChatHead = (chats, chatID, userID) => (
    <div className="c-chat-head">
      <div className="c-chat-contact-avatar-container">
        <img
          alt="contact-avatar"
          className="c-chat-contact-avatar"
          src={UserAvatar}
        />
      </div>
      <div className="c-chat-head-info">
        <div className="c-chat-contact-name">
          {this.getContactName(chats, chatID, userID)}
        </div>
        <div className="c-chat-contact-status">Active</div>
      </div>
    </div>
  )

  renderMessages = (chats, chatID, userID) => {
    const selectedChat = chats && chats.find(chat => chat.chatID === chatID);
    if (!selectedChat) {
      return '-';
    }
    const { messages } = selectedChat;
    if (messages) {
      return (
        <div className="c-chat-messages" id="c-chat-messages">
          {messages.map((message, index) => (
            <div
              className={appendClasses('c-chat-message', message.senderID === userID ? 'c-chat-message--sender' : 'c-chat-message--receiver')}
              key={`c-chat-message-${index}`}
            >
              <div className="c-chat-message-content">{message.message}</div>
              <div className="c-chat-message-timestamp">{message.timestamp}</div>
            </div>
          ))}
        </div>
      );
    }
    return 'No chat history';
  }

  renderNewMessage = () => (
    <div className="c-chat-new-message-container">
      <form onSubmit={this.sendMessage}>
        <div className="c-chat-new-message">
          <input
            onChange={this.handleInputChange}
            placeholder="Enter your message"
            type="text"
            value={this.state.message}
          />
        </div>
      </form>
    </div>
  )

  render() {
    const { ...props } = this.props;
    if (props.selectedChatID) {
      return (
        <div className="c-chat-component">
          {this.renderChatHead(props.chats, props.selectedChatID, props.userID)}
          {this.renderMessages(props.chats, props.selectedChatID, props.userID)}
          {this.renderNewMessage()}
        </div>
      );
    }
    return (
      <div className="c-chat-component-default">Select a chat to continue</div>
    );
  }
}

Chat.propTypes = {
  /* Functions */
  sendMessage: PropTypes.func.isRequired,
  /* Objects */
  chats: PropTypes.arrayOf(PropTypes.shape({})),
  selectedChatID: PropTypes.string,
  userID: PropTypes.string,
};

Chat.defaultProps = {
  chats: null,
  selectedChatID: null,
  userID: null,
};

export default Chat;
