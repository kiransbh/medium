import React,{ useState } from 'react';
import '../CSS/StoryTab.css';
import { Link } from 'react-router-dom';

function StoryTab() {

    const[tab, setTab] = useState(1);

    const switchTab = (index) => {
        setTab(index);
    }

  return (
    <div className='tab-container'>
        <div className='tabs'>
            <p
            className={tab === 1 ? 'activeTab' : 'Tab'}
            onClick={() => switchTab(1)}
            >Drafts</p>
            <p
            className={tab === 2 ? 'activeTab' : 'Tab'}
            onClick={() => switchTab(2)}
            >Published</p>
            <p
            className={tab === 3 ? 'activeTab' : 'Tab'}
            onClick={() => switchTab(3)}
            >Responses</p>
        </div>

        <div className='contenttabs'>
            <div
                className={tab === 1 ? 'activeContent' : 'content'}
            >
                <p>You have no drafts.</p>
                <p><span><Link to='/Write' style={{textDecoration:'none', color:'black'}}>write</Link></span> a story or <span>read</span> on Medium.</p>
            </div>
            <div
                className={tab === 2 ? 'activeContent' : 'content'}
            >
                <p>You haven't published any public stories yet.</p>
            </div>
            <div
                className={tab === 3 ? 'activeContent' : 'content'}
            >

            </div>
        </div>
    </div>
  )
}

export default StoryTab