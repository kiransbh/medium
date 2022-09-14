import React,{ useState } from 'react';
import '../CSS/NotifyTab.css';

function NotifyTab() {
    const[tab, setTab] = useState(1);

    const switchTab = (index) => {
        setTab(index);
    }

  return (
    <div className='notifytab-container'>
        <div className='notifyTab'>
            <p
                className={tab === 1 ? 'activenotifyTab' : 'notifytab'}
                onClick={() => switchTab(1)}
            >All</p>
            <p
                className={tab === 2 ? 'activenotifyTab' : 'notifytab'}
                onClick={() => switchTab(2)}          
            >Responses</p>
        </div>

        <div className='notify-contenttabs'>
            <div
                className={tab === 1 ? 'activeContent' : 'content'}
            >
                <p>You're all caught up.</p>
            </div>
            <div
                className={tab === 2 ? 'activeContent' : 'content'}
            >
                <p>You had been caught.</p>
            </div>
        </div>
    </div>
  )
}

export default NotifyTab