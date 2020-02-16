import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  sendMessage,
} from 'modules/messenger/Messenger.actions';
import Chat from './Chat.component';

const mapStateToProps = state => ({
  chats: state && state.messenger && state.messenger.chats,
  selectedChatID: state && state.messenger && state.messenger.selectedChatID,
  userID: state && state.messenger && state.messenger.userID,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    sendMessage,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
