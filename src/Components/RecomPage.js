import React from 'react';
import '../CSS/UI.css';
import LeftNav from './LeftNav';
import RecomFeed from './RecomFeed';
import Trend from './Trend';

function RecomPage() {
  return (
    <div className='ui'>
        <LeftNav />
        <RecomFeed />
        <Trend />
    </div>
  )
}

export default RecomPage