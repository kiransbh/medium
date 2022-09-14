import React from 'react';
import '../CSS/UI.css';
import LeftNav from './LeftNav';
import StoryFeed from './StoryFeed';
import Trend from './Trend';

function StoryPage() {
  return (
    <div className='ui'>
        <LeftNav />
        <StoryFeed />
        <Trend />
    </div>
  )
}

export default StoryPage