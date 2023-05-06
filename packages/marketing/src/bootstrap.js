import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mountMarketing = (htmlElement) => {
    console.log('Inside mountMarketing...........',htmlElement);
    ReactDOM.render(
        <App/>,
        htmlElement
    );
}

if (process.env.NODE_ENV === 'development') {
    console.log('Running marketing separately in development mode');
    const htmlElement = document.getElementById('_marketing-dev-root');

    if (htmlElement) {
        console.log('Invoke mountMarketing');
        mountMarketing(htmlElement);
    }
}

export { mountMarketing };