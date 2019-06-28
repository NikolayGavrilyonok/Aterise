import React from 'react';
import {render} from 'react-dom';
import {mockData} from './src/constants/mock';
import App from './src/core/App';

render(<App data={mockData}/>, document.getElementById('app-root'));
