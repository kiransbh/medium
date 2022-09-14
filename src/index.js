import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import LikeSlice from './Features/LikeSlice';
import FollowSlice from './Features/FollowSlice';

const Store = configureStore({
  reducer:{
    like: LikeSlice,
    follow: FollowSlice
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);