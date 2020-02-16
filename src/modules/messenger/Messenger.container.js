import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Messenger from './Messenger.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);
