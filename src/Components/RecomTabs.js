import React,{ useState } from 'react';
import '../CSS/RecomTabs.css';
import Suggestion from './Suggestion';

function RecomTabs() {

    const[tab, setTab] = useState(1);

    const switchTab = (index) => {
        setTab(index);
    }

  return (
    <div className='recommTabcontainer'>
        <div className='recomm-tabs'>
            <p
                className={tab === 1 ? 'activerecommTab' : 'recommTab'}
                onClick={() => switchTab(1)}
            >Following</p>
            <p
                className={tab === 2 ? 'activerecommTab' : 'recommTab'}
                onClick={() => switchTab(2)}
            >Reading history</p>
            <p
                className={tab === 3 ? 'activerecommTab' : 'recommTab'}
                onClick={() => switchTab(3)}
            >Muted</p>
            <p
                className={tab === 4 ? 'activerecommTab' : 'recommTab'}
                onClick={() => switchTab(4)}
            >Suggestions</p>
        </div>

        <div className='recomm-content'>
            <div 
            className={tab === 1 ? 'activerecommcontent' : 'recommcontent'}
            >
                <div className='following'>
                    <h2>You haven't followed anything yet</h2>
                    <p>Writers, publications, and topics you follow will appear here. The things you follow will influence what you see in the feed and daily email digests.</p>
                    <p style={{color:'#1b8918'}}>See Suggestions</p>
                </div>
            </div>
            <div 
            className={tab === 2 ? 'activerecommcontent' : 'recommcontent'}
            >
                <div className='reading'>
                    <p>You can clear you reading history for a fresh start.</p>
                    <button type='submit'>Clear history</button>
                </div>
            </div>
            <div 
            className={tab === 3 ? 'activerecommcontent' : 'recommcontent'}
            >
                <div className='muted'>
                    <h2>You haven't muted anything</h2>
                    <p>Writers and publications you've muted will appear here.</p>
                </div>
            </div>
            <div 
            className={tab === 4 ? 'activerecommcontent' : 'recommcontent'}
            >
                <Suggestion />
            </div>
        </div>
    </div>
  )
}

export default RecomTabs