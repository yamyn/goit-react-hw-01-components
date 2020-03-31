import React from 'react';
import ReactDOM from 'react-dom';

const link = React.createElement(
    'a',
    {
        href: 'https://reactjs.org/',
        target: '_blank',
        rel: 'noreferrer noopener',
    },
    'Ссылка на reactjs.org',
);

const title = React.createElement('h2', null, 'Tacos With Lime');
const price = React.createElement('p', null, 'Price: 10.99$');
const button = React.createElement('button', { type: 'button' }, 'Add to cart');

const product = React.createElement('div', null, image, title, price, button);

ReactDOM.render(product, document.getElementById('root'));
