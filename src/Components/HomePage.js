import React from 'react';
import '../CSS/UI.css';
import LeftNav from './LeftNav';
import HomeFeed from './HomeFeed';
import Trend from './Trend';

function HomePage() {
  return (
    <div className='ui'>
        <LeftNav />
        <HomeFeed />
        <Trend />
    </div>
  )
}

export default HomePage