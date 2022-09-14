import React from 'react';
import '../CSS/List.css';
import ListTab from './ListTab';

function List() {
  return (
      <div className='list'>
          <div className='list-header'>
            <h1>Your lists</h1>
            <button type='submit'>New list</button>
          </div>

          <ListTab />
      </div>
  )
}

export default List