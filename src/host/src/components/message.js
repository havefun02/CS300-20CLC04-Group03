import axios from 'axios';
import { useState } from 'react';
import shortid from 'shortid';
import { Socket } from 'socket.io-client';
import './message.css';
export default function MesOverlay({ props }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('');
  const [footer, setFooter] = useState('');
  const [mesOverlay, setmesOverlay] = props[0];


  return (
    <div className="mesOverlay">
      <div className="mesOverlay-flex-box">
        <div className="mesOverlay-title">
          <span style={{ fontSize: '19px', fontWeight: '700' }}>Message</span>
        </div>
        <div>
          <div className="mesOverlay-main">
            <div className='mes-title'>
                <div>
                    <span>Title</span>
                </div>
                <div>
                    <input placeholder='text' onChange={(e)=>setTitle(e.target.value)}></input>
                </div>
            </div>
            <div className='mes-body'>
                <div>
                    <span>Body</span>
                </div>
                <div>
                    <textarea placeholder='text' onChange={(e)=>setBody(e.target.value)}></textarea>
                </div>
            </div>
            <div className='mes-footer'>
                <div>
                    <span>Footer</span>
                </div>
                <div>
                    <input placeholder='text' onChange={(e)=>setFooter(e.target.va)}></input>
                </div>
            </div>
          </div>
        </div>
        <div
          style={{
            flex: '0 0 50px',
            alignItems: 'center',
            justifyContent: 'space-between',
            display: 'flex',
            margin: '0 auto',
            width: '400px'
          }}
        >
          <button
            onClick={() => {
                setTitle('')
                setBody('')
                setTitle('')
            }}
            style={{
              width: '140px',
              backgroundColor: '#000',
              color: '#fff',
              height: '30px',
              cursor: 'pointer'
            }}
          >
            Clear
          </button>
          <button
            onClick={async() => {
      const url = 'http://localhost:3001/host/emit-message';
                const res=await axios.post(url,{title:title,body:body,footer:footer})
              setmesOverlay((mesOverlay) => !mesOverlay);
            }}
            style={{
              width: '140px',
              backgroundColor: '#000',
              color: '#fff',
              height: '30px',
              cursor: 'pointer'
            }}
          >
            Send
          </button>
        </div>
        <div
          className="mesOverlay-exit"
          onClick={() => {

            setmesOverlay((mesOverlay) => !mesOverlay);
          }}
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjklEQVRIie2Vyw2AIBQER3uQaIlarhwsRy+Y4AfCPuTmnEx0dwg+FH4MzIAz5FzIZlmAHfCixIXMHjqSDMAaHtyAqaD8nhnVQE4ilysSc3mJpLo8J/ms/CSeEH+7tozzK/GqpZX3FdKuInuh6Ra9vVDLYSwuT92TJSWjaJYocy5LLIdIkjT/XEPjH87PgwNng1K28QMLlAAAAABJRU5ErkJggg==" />
        </div>
      </div>
    </div>
  );
}
