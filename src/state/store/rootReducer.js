import { combineReducers } from 'redux';
import MessengerReducer from 'modules/messenger/Messenger.reducer';

const rootReducer = combineReducers({
  messenger: MessengerReducer,
});

export default rootReducer;
