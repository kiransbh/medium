import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <Sign>
        <p>Join Medium</p>
        <div className='signin-btn-group'>
            <button type='submit'>Sign in with Google</button>
            <button type='submit'>Sign in with Facebook</button>
            <button type='submit'>Sign in with email</button>
        </div>
        <p className='cta'>Already have an account? <span><Link to='/Sign' style={{textDecoration:'none', color:'black'}}>Sign in</Link></span></p>
    </Sign>
  )
}

export default SignIn

const Sign = styled.div`
    width:20vw;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-30%,-50%);

    p{
        font-size:1.6em;
        font-family:'Medium';
        margin-left:16px;
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
        margin-left:-20px;

        span{
            font-family:'bold';
        }
    }
`