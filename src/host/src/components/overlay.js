import { useEffect, useState } from 'react';
import shortid from 'shortid';
import axios from 'axios';
import './overlay.css';
import { Context } from '../context/context';
import { useContext } from 'react';
export default function Overlay({ props }) {
  const context = useContext(Context);
  const [overlay, setOverlay] = props;
  const [listCode, setListCode] = useState(context.Notify);
  const [gift, setGift] = useState([]);
  const [isSelect, setSelect] = useState(Array(gift.length).fill(false));
  console.log(listCode);
  useEffect(() => {
    const token = localStorage.getItem('token');

    const options = {
      headers: {
        Authorization: 'Bearer ' + token
        // 'content-type': 'multipart/form-data'
      }
    };
    const fetch = async () => {
      const url = 'http://localhost:3001/host/get-default-gift';
      const res = await axios.get(url, options).then((data) => {
        console.log(data);
        setGift(data.data);
      });
    };
  });
  return (
    <div className="overlay">
      <div className="overlay-flex-box">
        <div className="overlay-title">
          <span style={{ fontSize: '19px', fontWeight: '700' }}>Gift Code</span>
        </div>
        <div>
          <div className="overlay-main">
            <div className="gift-list">
              {gift.map((e, ind) => {
                return (
                  <div key={shortid.generate()}>
                    <div className="gift-element">
                      <div>
                        <span>Voucher</span>
                      </div>
                      <div>
                        <div>
                          <span>Free</span>
                        </div>
                        <div>
                          <span style={{ color: 'red', fontSize: '12px' }}>
                            Discount: {'10%'}
                          </span>
                        </div>
                        <div>
                          <span style={{ fontSize: '11px' }}>
                            Valid till: {'12/12/2022'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      {!isSelect[ind] ? (
                        <span
                          onClick={() => {
                            isSelect[ind] = true;
                            setSelect(Object.assign([], isSelect));
                          }}
                        >
                          Select
                        </span>
                      ) : (
                        <span
                          onClick={() => {
                            isSelect[ind] = false;
                            setSelect(Object.assign([], isSelect));
                          }}
                        >
                          Cancel
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
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
              setSelect(Array(gift.length).fill(false));
            }}
            style={{
              width: '140px',
              backgroundColor: '#000',
              color: '#fff',
              height: '30px',
              cursor: 'pointer'
            }}
          >
            Cancel All
          </button>
          <button
            onClick={async () => {
              let clone = [];
              isSelect.forEach((e, ind) => {
                if (e === true) {
                  clone.push(gift[ind]);
                }
              });
              setListCode(clone);

              const url = 'http://localhost:3001/host/emit-gift';
              const res = await axios.post(url, { listCode });
              setOverlay((overlay) => !overlay);
            }}
            style={{
              width: '140px',
              backgroundColor: '#000',
              color: '#fff',
              height: '30px',
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        </div>
        <div
          className="overlay-exit"
          onClick={() => {
            setOverlay((overlay) => !overlay);
          }}
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjklEQVRIie2Vyw2AIBQER3uQaIlarhwsRy+Y4AfCPuTmnEx0dwg+FH4MzIAz5FzIZlmAHfCixIXMHjqSDMAaHtyAqaD8nhnVQE4ilysSc3mJpLo8J/ms/CSeEH+7tozzK/GqpZX3FdKuInuh6Ra9vVDLYSwuT92TJSWjaJYocy5LLIdIkjT/XEPjH87PgwNng1K28QMLlAAAAABJRU5ErkJggg==" />
        </div>
      </div>
    </div>
  );
}
