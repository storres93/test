import React from 'react';
import ReactDOM from 'react-dom';

const rootNode = document.getElementById('root');

// THIS DOES NOT WORK
const MySimpleButton = () => (<div onMouseDown={() => alert('clicked')}>click here</div>);
ReactDOM.render(<MySimpleButton/>, rootNode);

// THIS WORKS
ReactDOM.render(<div onClick={() => { alert('clicked') }}>click fucking here</div>, rootNode);
