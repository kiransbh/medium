import React,{ useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { following } from '../Features/FollowSlice';

function SuggestList() {

    const[follow, setFollow] = useState({
        state: false
    });

    function following(){
        setFollow((prevState) => ({
            state:!prevState.state
        }));
    }

  return (
    <Suggest>
        <div className='user-account'>
            <div className='flex'>
                <div className='user-account-profile-image'>
                    <img src='/Images/profile.jpg' alt='profile' />
                </div>
                <div className='user-account-profile-name-bio'>
                    <p style={{fontWeight:'bold'}}>Kiran</p>
                    <p>Writer, blogger, activist. Blog: https://kiran-ui-developer.com. Email: kirannok1274@gmail.com</p>
                </div>
            </div>

            <div onClick={following} className='btn'>
                {
                    follow.state ? <button type='submit' className='btn-following'>Following</button> : <button type='submit' className='btn-follow'>Follow</button>
                }
            </div>
        </div>
    </Suggest>
  )
}

export default SuggestList

const Suggest = styled.div`
    .user-account{
        width:100%;
        height:10vh;
        display:flex;
        align-items:center;
        justify-content:space-between;

        .flex{
            height:10vh;
            display:flex;
            align-items:center;
            justify-content:flex-start;

            .user-account-profile-image{
                img{
                    width:54px;
                    height:54px;
                    border-radius:50%;
                }
            }

            .user-account-profile-name-bio{
                margin-left:12px;

                p{
                    margin:2px;
                    width:84%;
                }
            }
        }

        .btn > .btn-following{
            font-size:0.9em;
            padding:6px 12px;
            border:1px solid #1b8918;
            outline:none;
            border-radius:20px;
            background:transparent;
            color:#1b8918;
            cursor:pointer;
        }

        .btn > .btn-follow{
            font-size:0.9em;
            padding:6px 12px;
            border:none;
            outline:none;
            border-radius:20px;
            background:#1b8918;
            color:white;
            cursor:pointer;
            transition:250ms all;
        }
    }
`