import React,{ useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import  { Link } from 'react-router-dom';

function HomeRecommList({title, content}) {

    function truncate(str, n){
        return str.length ? str.substring(0, n-1) + '... '  : str ;
    }

    const[show, setShow] = useState(false);
    const showRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if(!showRef.current.contains(e.target)){
                setShow(false);
            }
        }
        document.addEventListener('mousedown', handler);

        return () => document.removeEventListener('mousedown', handler);
    },[]);

  return (
    <HomeRecomm>
        <Link to='/ParticularPage' style={{textDecoration:'none', color:'black'}}>
        <div className='top'>
            <img src='/Images/icon.png' alt='profile' />
            <h3>Former staffs & friends</h3>
            <p>3 days ago</p>
        </div>
        <div className='middle'>
            <div className='mid-left'>
                <h1>{ title }</h1>
                <p>{truncate(content,150)}</p>
            </div>
            <div className='mid-right'>
                <img src='/Images/icon.png' alt='article' />
            </div>
        </div>
        </Link>
        <div className='bottom'>
            <div className='bot-left'>
                <p>3 mins read</p>
            </div>
            <div className='bot-right'>
            <img src='/Images/banner.png' width={36} height={36} alt='icon' />
            <img src='/Images/option.png' width={24} height={24} alt='icon' style={{cursor:'pointer'}} onClick={() => setShow(true)}/>
            </div>
        </div>

        <Recompop show={show} ref={showRef}>
          <p>Mute this author</p>
          <p>Mute this publication</p>
          <p>Report</p>
        </Recompop>
    </HomeRecomm>
  )
}

export default HomeRecommList

const HomeRecomm = styled.div`
    width:100%;
    height:35vh;
    border-bottom:1px solid rgba(0,0,0,0.2);

    .top{
        display:flex;
        align-items:center;
        justify-content:flex-start;

        img{
            width:30px;
            height:30px;
            border-radius:50%;
        }

        h3,
        p{
            margin-left:8px;
        }
    }

    .middle{
        width:100%;
        height:15vh;
        margin-top:2%;
        display:flex;
        align-items:center;
        justify-content:space-between;

        .mid-left{
            h1{
                font-family:'bold';
                width:90%;
            }
        }

        .mid-right{
            img{
                width:7vw;
                height:15vh;
            }
        }
    }

    .bottom{
        width:70%;
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-top:2%;

        .bot-left,
        .bot-right{
            display:flex;
            align-items:center;
        }
    }
`
const Recompop = styled.div`
  width:12vw;
  height:16vh;
  background:white;
  position:relative;
  top:0%;
  left:55%;
  border-radius:4px;
  border:1px solid rgba(0,0,0,0.1);
  box-shadow:0 3px 8px rgba(0,0,0,0.1);
  display:${props => props.show ? 'block' : 'none'};

  :before{
    content:'';
    width:14px;
    height:14px;
    background-color:white;
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