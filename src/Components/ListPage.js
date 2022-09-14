import React from 'react';
import '../CSS/UI.css';
import LeftNav from './LeftNav';
import ListFeed from './ListFeed';
import Trend from './Trend';

function ListPage() {
  return (
    <div className='ui'>
        <LeftNav />
        <ListFeed />
        <Trend />
    </div>
  )
}

export default ListPage