import React from 'react';
import '../CSS/UI.css';
import LeftNav from './LeftNav';
import ParticularFeed from './ParticularFeed';
import Trend from './Trend';

function ParticularPage() {
  return (
    <div className='ui'>
        <LeftNav />
        <ParticularFeed />
        <Trend />
    </div>
  )
}

export default ParticularPage