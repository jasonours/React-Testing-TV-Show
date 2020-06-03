import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

import { fetchShow as mockFetchShow } from './api/fetchShow'; 



test("render App without error", () => {
    render (<App />)
})