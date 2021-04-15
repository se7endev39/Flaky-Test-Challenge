import React from 'react';
import ReactDOM from 'react-dom';
import './semantic-ui/semantic.min.css';
import './index.css';

import RemotePersist from './10-remote-persist.js';

ReactDOM.render((
  <div className="ui container">
    <RemotePersist />
  </div>
), document.getElementById('root'));
