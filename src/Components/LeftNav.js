import React,{ useState, useEffect, useRef } from 'react';
import '../CSS/LeftNav.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function LeftNav() {

  const profileRef = useRef();
  const[profile, setProfile] = useState(false);

  useEffect(() => {
    const Handler = (e) => {
      if(!profileRef.current.contains(e.target)){
        setProfile(false);
      }
    }
    document.addEventListener('mousedown', Handler);

    return () => document.removeEventListener('mousedown', Handler);
  },[]);

  return (
    <>
    <div className='left'>
      <div className='container'>

        <div className='brand-icon'>
          <img src='/Images/icon.png' alt='brand-icon' />
        </div>

        <div className='navigation'>
          <li>
            <Link to='/Home' style={{listStyle:'none', textDecoration:'none', color:'black'}}>
              <img src='/Images/home.png' width={24} height={24} alt='icon' className='hover-a' />
             </Link>
          </li>
          <li>
            <Link to='/Story' style={{listStyle:'none', textDecoration:'none', color:'black'}}>
              <img src='/Images/bell-ring.png' width={24} height={24} alt='icon' />
            </Link>
          </li>
          <li>
            <Link to='/List' style={{listStyle:'none', textDecoration:'none', color:'black'}}>
              <img src='/Images/ribbon.png' width={24} height={24} alt='icon' />
            </Link>
          </li>
          <li>
            <Link to='/Notification' style={{listStyle:'none', textDecoration:'none', color:'black'}}>
              <img src='/Images/menu.png' width={24} height={24} alt='icon' />
            </Link>
          </li>
          <hr style={{marginTop:36}}/>
          <li>
            <Link to='/Write' style={{listStyle:'none', textDecoration:'none', color:'black'}}>
              <img src='/Images/edit.png' width={24} height={24} alt='icon' />
            </Link>
          </li>
        </div>

        <div className='profile' onClick={() => setProfile(true)}>
          <img src='/Images/profile.jpg' alt='profile' />
        </div>

        <Popup show={profile} ref={profileRef} className='profile-popup'>
          <p>Medium Partner Program</p>
          <p>Git a membership</p>
          <p>Become a member</p>
          <hr style={{opacity:0.36}}/>
          <p><Link to='/' style={{listStyle:'none', textDecoration:'none', color:'black'}}>Sign out</Link></p>
          <p>Refine recommandations</p>
          <p>Manage publications</p>
          <p>Stats</p>
          <p>Settings</p>
          <hr style={{opacity:0.24}}/>
          <Link to='/Profile' style={{listStyle:'none', textDecoration:'none', color:'black'}}>
          <div className='account'>
            <img src='/Images/profile.jpg' alt='profile' />
            <div className='account-name'>
              <p style={{fontWeight:'bold'}}>Kiran</p>
              <p>@kiran1274</p>
            </div>
          </div>
          </Link>
        </Popup>
      </div>
    </div>
    </>
  )
}

export default LeftNav

const Popup = styled.div`
  display:${props => props.show ? 'block' : 'none'};

  :before{
    content:'';
    width:14px;
    height:14px;
    background-color:white;
    position:absolute;
    top:98.5%;
    left:10%;
    transform:rotate(45deg);
    border-top:0px solid rgba(0,0,0,0.1);
    border-right:1px solid rgba(0,0,0,0.1);
    border-bottom:1px solid rgba(0,0,0,0.1);
    border-left:0px solid rgba(0,0,0,0.1);
    border-radius:2px;
  }

  .account{
    display:flex;
    align-items:center;
    justify-content:flex-start;
    margin-left:20px;

    img{
      width:30px;
      height:30px;
      border-radius:50%;
    }

    .account-name{
      margin-left:12px;
    }
  }
`