import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  selectChat,
} from 'modules/messenger/Messenger.actions';
import Chats from './Chats.component';

const mapStateToProps = state => ({
  selectedChatID: state && state.messenger && state.messenger.selectedChatID,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    selectChat,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
