import React from 'react';
import ReactDOM from 'react-dom';

// import ant design css
import 'antd/dist/antd.css';

// import custom css
import './index.css';

import { App } from './App';

// render app component in html element with id root
ReactDOM.render(<App />, document.getElementById('root'));
