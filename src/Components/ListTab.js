import React,{ useState } from 'react';
import styled from 'styled-components';
import '../CSS/ListTab.css';

function ListTab() {

    const[tab, setTab] = useState(1);
    const[close, setClose] = useState(true);

    const switchTab = (index) => {
        setTab(index);
    }

  return (
    <div className='listTab-contanier'>
        <div className='listTab'>
            <p
                className={tab === 1 ? 'activelistTab' : 'listtab'}
                onClick={() => switchTab(1)}
            >Saved</p>
            <p
                className={tab === 2 ? 'activelistTab' : 'listtab'}
                onClick={() => switchTab(2)}          
            >Highlights</p>
        </div>

        <div className='list-content'>
            <div
                className={tab === 1 ? 'activelistContent' : 'listcontent'}
            >
                <Create className='start-a-list' show={close}>
                    <p onClick={() => setClose(false)}>X</p>
                    <h2>Create a list to easily organize and share stories</h2>
                    <button type='submit'>Start a list</button>
                </Create>
            </div>
            <div
                className={tab === 2 ? 'activelistContent' : 'listcontent'}
            >
                
            </div>
        </div>
    </div>
  )
}

export default ListTab

const Create = styled.div`
    display:${props => props.show ? 'block' : 'none'};
`