import { useState } from 'react';
import shortid from 'shortid';
import './overlay.css';
export default function Overlay({ props }) {
  const [overlay, setOverlay] = props[0];
  const [listCode, setListCode] = props[1];
  const [gift, setGift] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}]);
  const [isSelect, setSelect] = useState(Array(gift.length).fill(false));

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
            onClick={() => {
              let clone = [];
              isSelect.forEach((e, ind) => {
                if (e === true) {
                  clone.push(gift[ind]);
                }
              });
              setOverlay((overlay) => !overlay);
              setListCode(clone);
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
