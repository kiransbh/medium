import React,{ useState } from 'react';
import '../CSS/ProfileTab.css';

function ProfileTab() {

    const[tab, setTab] = useState(1);

    const switchTab = (index) => {
        setTab(index);
    }

  return (
    <div className='profile-tab-container'>
        <div className='profile-tabs'>
            <p
                className={tab === 1 ? 'activeprofiletab' : 'profiletab'}
                onClick={() => switchTab(1)}
            >Home</p>
            <p
                className={tab === 2 ? 'activeprofiletab' : 'profiletab'}
                onClick={() => switchTab(2)}
            >About</p>
        </div>

        <div className='profile-content'>
            <div 
            className={tab === 1 ? 'activeprofilecontent' : 'profilecontent'}
            ></div>
            <div 
            className={tab === 2 ? 'activeprofilecontent' : 'profilecontent'}
            >
                <div className='brief'>
                    <h2>Tell the world about yourself</h2>
                    <p>Here's where you can share more about yourself: your history, work experience, accomplishments, interests, dreams, and more. You can even add images and use rich text to personalize your bio.</p>
                    <button type='submit'>Get started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileTab