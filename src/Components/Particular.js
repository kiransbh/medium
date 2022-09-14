import React,{ useState } from 'react';
import '../CSS/Particular.css';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../Features/LikeSlice';

function Particular() {

  const count = useSelector((state) => state.like.count);
  const dispatch = useDispatch();

  const[comment, setComment] = useState(0);

  return (
    <div className='particular-container'>
      <Reaction className='reaction'>
        <li onClick={() => dispatch(increment())}>
          <img src='/Images/clapping.png' width={24} height={24} alt='option' />
          <p>{ count }</p>
          <span className='like' key={count}><p>+{ count }</p></span>
        </li>
        <li onClick={() => setComment(comment + 1)}>
          <img src='/Images/chat.png' width={24} height={24} alt='option' />
          <span style={{marginLeft:'6px'}}>{ comment }</span>
        </li>
        <li>
          <img src='/Images/option.png' width={24} height={24} alt='option' />
        </li>
      </Reaction>
      <div className='particular-post-title'>
        <h1>Fugees family celebrates it founder, fails to safegaurd refugeee children</h1>
      </div>
      <div className='particular-post-content'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ipsam. Nisi praesentium distinctio sed quidem eius. Placeat vitae aliquam alias, ducimus vero esse numquam id sapiente, illo optio amet quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id quis ratione velit quaerat nobis, rerum architecto est ipsam placeat fugiat labore ducimus, possimus sit quia rem porro error cumque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ipsam. Nisi praesentium distinctio sed quidem eius. Placeat vitae aliquam alias, ducimus vero esse numquam id sapiente, illo optio amet quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id quis ratione velit quaerat nobis, rerum architecto est ipsam placeat fugiat labore ducimus, possimus sit quia rem porro error cumque.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ipsam. Nisi praesentium distinctio sed quidem eius. Placeat vitae aliquam alias, ducimus vero esse numquam id sapiente, illo optio amet quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id quis ratione velit quaerat nobis, rerum architecto est ipsam placeat fugiat labore ducimus, possimus sit quia rem porro error cumque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ipsam. Nisi praesentium distinctio sed quidem eius. Placeat vitae aliquam alias, ducimus vero esse numquam id sapiente, illo optio amet quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id quis ratione velit quaerat nobis, rerum architecto est ipsam placeat fugiat labore ducimus, possimus sit quia rem porro error cumque.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ipsam. Nisi praesentium distinctio sed quidem eius. Placeat vitae aliquam alias, ducimus vero esse numquam id sapiente, illo optio amet quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id quis ratione velit quaerat nobis, rerum architecto est ipsam placeat fugiat labore ducimus, possimus sit quia rem porro error cumque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ipsam. Nisi praesentium distinctio sed quidem eius. Placeat vitae aliquam alias, ducimus vero esse numquam id sapiente, illo optio amet quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id quis ratione velit quaerat nobis, rerum architecto est ipsam placeat fugiat labore ducimus, possimus sit quia rem porro error cumque.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ipsam. Nisi praesentium distinctio sed quidem eius. Placeat vitae aliquam alias, ducimus vero esse numquam id sapiente, illo optio amet quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id quis ratione velit quaerat nobis, rerum architecto est ipsam placeat fugiat labore ducimus, possimus sit quia rem porro error cumque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ipsam. Nisi praesentium distinctio sed quidem eius. Placeat vitae aliquam alias, ducimus vero esse numquam id sapiente, illo optio amet quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id quis ratione velit quaerat nobis, rerum architecto est ipsam placeat fugiat labore ducimus, possimus sit quia rem porro error cumque.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ipsam. Nisi praesentium distinctio sed quidem eius. Placeat vitae aliquam alias, ducimus vero esse numquam id sapiente, illo optio amet quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id quis ratione velit quaerat nobis, rerum architecto est ipsam placeat fugiat labore ducimus, possimus sit quia rem porro error cumque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ipsam. Nisi praesentium distinctio sed quidem eius. Placeat vitae aliquam alias, ducimus vero esse numquam id sapiente, illo optio amet quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id quis ratione velit quaerat nobis, rerum architecto est ipsam placeat fugiat labore ducimus, possimus sit quia rem porro error cumque.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ipsam. Nisi praesentium distinctio sed quidem eius. Placeat vitae aliquam alias, ducimus vero esse numquam id sapiente, illo optio amet quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id quis ratione velit quaerat nobis, rerum architecto est ipsam placeat fugiat labore ducimus, possimus sit quia rem porro error cumque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ipsam. Nisi praesentium distinctio sed quidem eius. Placeat vitae aliquam alias, ducimus vero esse numquam id sapiente, illo optio amet quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id quis ratione velit quaerat nobis, rerum architecto est ipsam placeat fugiat labore ducimus, possimus sit quia rem porro error cumque.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ipsam. Nisi praesentium distinctio sed quidem eius. Placeat vitae aliquam alias, ducimus vero esse numquam id sapiente, illo optio amet quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id quis ratione velit quaerat nobis, rerum architecto est ipsam placeat fugiat labore ducimus, possimus sit quia rem porro error cumque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ipsam. Nisi praesentium distinctio sed quidem eius. Placeat vitae aliquam alias, ducimus vero esse numquam id sapiente, illo optio amet quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id quis ratione velit quaerat nobis, rerum architecto est ipsam placeat fugiat labore ducimus, possimus sit quia rem porro error cumque.</p>
      </div>
    </div>
  )
}

export default Particular

const Reaction = styled.div`
  width:18vw;
  height:6vh;
  background-color:white;
  box-shadow:0 3px 8px rgba(0,0,0,0.1);
  position:sticky;
  top:90%;
  left:30%;
  border-radius:30px;
  display:flex;
  align-items:center;
  justify-content:space-between;

  li{
    list-style:none;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 16px;
    cursor:pointer;

    p{
      margin-left:6px;
    }

    .like{
      width:30px;
      height:30px;
      border-radius:50%;
      background-color:black;
      color:white;
      margin-left:-50%;
      animation:move 1s linear forwards;

      p{
        margin-top:15%;
      }

      @keyframes move{
        0%{
          opacity:0;
          margin-top:0;
        }
        30%{
          opacity:1;
          margin-top:-50px;
        }
        68%{
          opacity:1;
          margin-top:-100px;
        }
        100%{
          opacity:0;
          margin-top:-100px;
        }
      }
    }
  }
`