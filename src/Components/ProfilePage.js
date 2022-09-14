import React from 'react';
import '../CSS/UI.css';
import LeftNav from './LeftNav';
import ProfileFeed from './ProfileFeed';
import Trend from './Trend';

function ProfilePage() {
  return (
    <div className='ui'>
        <LeftNav />
        <ProfileFeed />
        <Trend />
    </div>
  )
}

export default ProfilePage