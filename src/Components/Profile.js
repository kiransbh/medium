import React,{ useState, useEffect, useRef } from 'react';
import '../CSS/Profile.css';
import ProfileTab from './ProfileTab';
import styled from 'styled-components';

function Profile() {

  const[show, setShow] = useState(false);
  const ShowRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if(!ShowRef.current.contains(e.target)){
        setShow(false);
      }
    }
    document.addEventListener('mousedown', handler);

    return () => document.removeEventListener('mousedown', handler);
  },[]);

  return (
    <div className='profile-page'>
        <div className='profile-page-header'>
            <div className='name-image'>
              <img src='/Images/profile.jpg' alt='profile' />
              <h1>Kiran</h1>
            </div>
            <img src='/Images/option.png' width={24} height={24} style={{cursor:'pointer'}} alt='icon' onClick={() => setShow(true)} />
        </div>

        <ProfileTab />

        <Profilepop show={show} ref={ShowRef}>
          <p>Copy link to profile</p>
          <p>Design your profile</p>
        </Profilepop>
    </div>
  )
}

export default Profile

const Profilepop = styled.div`
  width:12vw;
  height:12vh;
  background-color:white;
  position:absolute;
  top:40%;
  left:85%;
  border-radius:4px;
  border:1px solid rgba(0,0,0,0.1);
  box-shadow:0 3px 8px rgba(0,0,0,0.1);
  display:${props => props.show ? 'block' : 'none'};

  :before{
    content:'';
    width:14px;
    height:14px;
    background:white;
    position:absolute;
    top:-8%;
    left:46%;
    transform:rotate(45deg);
    border-top:1px solid rgba(0,0,0,0.1);
    border-right:0px solid rgba(0,0,0,0.1);
    border-bottom:0px solid rgba(0,0,0,0.1);
    border-left:1px solid rgba(0,0,0,0.1);
  }

  p{
    margin-left:30px;
  }
`