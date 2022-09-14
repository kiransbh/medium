import React from 'react';
import '../CSS/Recommandations.css';
import RecomTabs from './RecomTabs';

function Recommandations() {
  return (
    <div className='recommandation'>
        <div className='recomm-header'>
            <h1>Refine Recommandations</h1>
            <p>Adjust Recommandations by updating what you're following, your reading history, and who you've muted.</p>
        </div>

        <RecomTabs />
    </div>
  )
}

export default Recommandations