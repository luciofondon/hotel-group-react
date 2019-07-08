import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../pages/containers/app';

const appContainer = document.getElementById("app");

render(
    <BrowserRouter
        basename="/hotels"
    >
        <App/>
    </BrowserRouter>,
    appContainer
);