import React from 'react';
import '../CSS/UI.css';
import LeftNav from './LeftNav';
import NotifyFeed from './NotifyFeed';
import Trend from './Trend';

function NotifyPage() {
  return (
    <div className='ui'>
        <LeftNav />
        <NotifyFeed />
        <Trend />
    </div>
  )
}

export default NotifyPage