import React from 'react';
import '../CSS/Story.css';
import StoryTab from './StoryTab';

function story() {
  return (
    <div className='story'>
        <div className='top'>
          <h1>Your stories</h1>
          <div className='btns'>
            <button type='submit' style={{background:'black',color:'white',border:'1px solid black',marginRight:'8px'}}>write a story</button>
            <button type='submit' style={{border:'1px solid black'}}>Import a story</button>
          </div>
        </div>

        <StoryTab />
    </div>
  )
}

export default story