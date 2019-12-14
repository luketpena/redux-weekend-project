import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const feedbackReducer = (state = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
  }, action) => {
    
  switch(action.type) {
    case 'IN_FEELING': return {...state, feeling: action.payload};
    case 'IN_UNDERSTANDING': return {...state, understanding: action.payload};
    case 'IN_SUPPORT': return {...state, support: action.payload};
    case 'IN_COMMENT': return {...state, comments: action.payload};
    case 'RESET_FORM': return {
      feeling: '',
      understanding: '',
      support: '',
      comments: ''
    };
    default: return state;
  }
};

const storeInstance = createStore(
  combineReducers({
    feedbackReducer
}),
);

ReactDOM.render(<Provider store={storeInstance}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();

