import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <Landing>
        <div className='logo'>
            <img src='/Images/icon.png' width={42} height={42} alt='logo' />
            <h1>Medium</h1>
        </div>
        <div className='login-btn'>
            <li><Link to='/SignIn' style={{textDecoration:'none',color:'black'}}>Our story</Link></li>
            <li><Link to='/SignIn' style={{textDecoration:'none',color:'black'}}>Membership</Link></li>
            <li><Link to='/SignIn' style={{textDecoration:'none',color:'black'}}>Write</Link></li>
            <li><Link to='/SignIn' style={{textDecoration:'none',color:'black'}}>Sign in</Link></li>
            <li><button type='submit'><Link to='/SignIn' style={{textDecoration:'none',color:'white'}}>Get started</Link></button></li>
        </div>
    </Landing>
  )
}

export default LandingPage

const Landing = styled.div`
    width:100vw;
    height:10vh;
    border-bottom:1px solid black;
    display:flex;
    align-items:center;
    justify-content:space-between;

    .logo{
        display:flex;
        align-items:center;
        margin:0 180px;

        h1{
            font-size:2em;
            font-family:'Medium';
            margin-left:12px;
        }
    }

    .login-btn{
        display:flex;
        align-items:center;
        margin:0 180px;
        font-size:0.9em;

        li{
            list-style:none;
            margin-left:16px;
            cursor:pointer;

            :first-child{
                margin-left:0;
            }

            button{
                padding:8px 12px;
                border:none;
                outline:none;
                border-radius:20px;
                background:black;
                color:white;
                cursor:pointer;
            }
        }
    }
`