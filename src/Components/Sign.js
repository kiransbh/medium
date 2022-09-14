import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Sign() {
  return (
    <Signin>
        <p>Welcome back.</p>
        <div className='signin-btn-group'>
            <button type='submit'><Link to='/Home' style={{textDecoration:'none', color:'black'}}>Sign in with Google</Link></button>
            <button type='submit'>Sign in with Facebook</button>
            <button type='submit'>Sign in with Apple</button>
            <button type='submit'>Sign in with Twitter</button>
            <button type='submit'>Sign in with email</button>
        </div>
        <p className='cta'>No account? <span><Link to='/SignIn' style={{textDecoration:'none', color:'#1b8918'}}>Create</Link></span></p>
    </Signin>
  )
}

export default Sign

const Signin = styled.div`
    width:20vw;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-30%,-50%);

    p{
        font-size:1.6em;
        font-family:'Medium';
        margin-left:6px;
    }

    .signin-btn-group{
        width:12vw;
        display:flex;
        flex-direction:column;

        button{
            font-size:0.9em;
            padding:10px 12px;
            margin-top:12px;
            outline:none;
            border:1px solid rgba(0,0,0,0.2);
            background:white;
            border-radius:20px;
            cursor:pointer;

            :first-child{
                margin-top:0;
            }
        }
    }

    .cta{
        font-size:1em;
        font-family: 'Light';
        margin-left:24px;

        span{
            font-family:'bold';
        }
    }
`