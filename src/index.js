import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const feedbackReducer = (state = {
    feeling: '',
    understanding: '',
    support: '',
    comment: ''
  }, action) => {
  
  switch(action.type) {
    case 'IN_FEELING': return {feeling: action.payload};
    case 'IN_UNDERSTANDING': return {understanding: action.payload};
    case 'IN_SUPPORT': return {support: action.payload};
    case 'IN_COMMENT': return {comment: action.payload};
    default: return state;
  }
};

const storeInstance = createStore(
  feedbackReducer
);

ReactDOM.render(<Provider store={storeInstance}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();

