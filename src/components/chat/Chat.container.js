import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chat from './Chat.component';

const mapStateToProps = state => ({
  chats: state && state.messenger && state.messenger.chats,
  selectedChatID: state && state.messenger && state.messenger.selectedChatID,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
