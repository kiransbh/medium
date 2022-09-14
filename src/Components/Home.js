import React,{ useState } from 'react';
import '../CSS/Home.css';
import HomeRecomm from './HomeRecomm';
import { Link } from 'react-router-dom';

function Home() {

    const[tab, setTab] = useState(1);

    const switchTab = (index) => {
        setTab(index);
    }

  return (
    <div className='home-container'>
        <div className='link-to-recommandation'>
                <span></span>
            <Link to='/Recommandation' style={{listStyle:'none', textDecoration:'none', color:'black'}}>
                <p style={{width:'30vw', marginLeft:'2%'}}>Keep up with the latest in any topic</p>
            </Link>
        </div>
        <div className='home-Tab'>
            <p
                className={tab === 1 ? 'activeHomeTab' : 'homeTab' }
                onClick={() => switchTab(1)}
            >Following</p>
            <p
                className={tab === 2 ? 'activeHomeTab' : 'homeTab' }
                onClick={() => switchTab(2)}
            >Recommanded</p>
        </div>

        <div className='home-content'>
            <div
                className={tab === 1 ? 'activecontent' : 'content'}
            >
                <div className='follow-recomm'>
                    <p>stories from the writer you follow will appear here.</p>
                    <button><Link to='/Recommandation' style={{listStyle:'none', textDecoration:'none', color:'white'}}>Browse recommanded stories</Link></button>
                </div>
            </div>
            <div
                className={tab === 2 ? 'activecontent' : 'content'}
            >
                <HomeRecomm />
            </div>
        </div>
    </div>
  )
}

export default Home