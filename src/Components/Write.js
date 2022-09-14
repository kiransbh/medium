import React,{ useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

function Write() {

    const mediaRef = useRef();
    const[Show, setShow] = useState(false);

    useEffect(() => {
        const Handler = (e) => {
            if(!mediaRef.current.contains(e.target)){
                setShow(false);
            }
        }
        document.addEventListener('mousedown', Handler);

        return () => document.removeEventListener('mousedown', Handler);
    },[]);


  return (
    <WritePost>
        <button type='submit'>Publish</button>
        <div className='post-title'>
            <input 
                type='text' 
                placeholder='Title'
            />
        </div>
        <div className='post-content'>
            <div className='media'  onClick={() => setShow(true)}>
                <p>+</p>
            </div>
            <input 
                    type='text' 
                    placeholder='Content' 
            />
        </div>

        <Media show={Show} ref={mediaRef}>
            <div className='medias'>
                <li>a</li>
                <li>b</li>
                <li>c</li>
                <li>d</li>
            </div>
        </Media>
    </WritePost>
  )
}

export default Write

const WritePost = styled.div`
    width: 56%;
    height:100vh;
    position: absolute;
    left: 21%;

    button{
        padding:6px 12px;
        position:relative;
        margin-left:92.5%;
        margin-top:2%;
        outline:none;
        bordeer:none;
        background-color:black;
        border-radius:20px;
        font-size:0.9em;
        color:white;
        cursor:pointer;
    }

    .post-title{
        margin-top:2%;

        input{
            font-size:2em;
            padding-left:12px;
            width:100%;
            outline:none;
            border:none;
            background:transparent;
            border-bottom:1px solid rgba(0,0,0,0.2);
        }
    }

    .post-content{
        margin-top:4%;

        .media{
            width:24px;
            height:24px;
            border-radius:50%;
            background:white;
            border:1px solid black;
            cursor:pointer;

            p{
                font-size:1.5em;
                position:relative;
                margin-top:-20%;
                left:24%;
            }
        }

        input{
            font-size:1em;
            margin-top:4%;
            padding-left:12px;
            width:100%;
            outline:none;
            border:none;
            background:transparent;
            border-bottom:1px solid rgba(0,0,0,0.2);
        }
    }
`
const Media = styled.div`
    display:${props => props.show ? 'block' : 'none'};
    width:16%;
    position:relative;
    margin-left:5%;
    margin-top:-9.4%;

    .medias{
        display:flex;
        align-items:center;

        li:first-child{
            margin-left:0;
        }

        li{
            text-align:center;
            list-style:none;
            width:24px;
            height:24px;
            border-radius:50%;
            background:white;
            border:1px solid black;
            margin-left:12px;
            cursor:pointer;
            transition: 1s ease-out;
            transition-delay: 1s;
        }
    }
`