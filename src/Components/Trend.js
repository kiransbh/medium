import React from 'react';
import '../CSS/Trend.css';

function Trend() {
  return (
    <div className='trend'>
      <div className='wrapper'>
        <button type='submit'>Get unlimited access</button>
        <div className='search'>
          <img src='/Images/search.png' width={18} height={18} alt='icon' />
          <input type='search'  placeholder='Search'/>
        </div>
      </div>
    </div>
  )
}

export default Trend