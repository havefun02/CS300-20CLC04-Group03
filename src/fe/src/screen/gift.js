import { useState, useContext, useEffect } from 'react';
import { Context } from '../context/context';
import './gift.css';
import { useNavigate } from 'react-router-dom';
import shortid from 'shortid';
import axios from 'axios';
export default function Gift() {
  const navigate = useNavigate();
  const context = useContext(Context);
  const id_user = context.id;
  const currentDay = new Date();
  const name = context.name;
  const [gift, setGift] = useState([]);
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const email = sessionStorage.getItem('email');

    const options = {
      headers: {
        Authorization: 'Basic ' + token + ':' + email
        // 'content-type': 'multipart/form-data'
      }
    };

    const fetchGift = async () => {
      const url = `http://localhost:3001/user/voucher-list/${id_user}`;
      const res = await axios.get(url, options).then((data) => {
        console.log(data);
        setGift(data.data);
      });
    };
    fetchGift();
  }, [fetch]);
  return (
    <div className="gift-container">
      <div className="gift-grid">
        <div className="gift-nav">
          <div className="gift-group-info">
            <div>
              <div>
                <img
                  onClick={() => {
                    navigate('/profile');
                  }}
                  style={{
                    borderRadius: '30px',
                    width: '45px',
                    height: '45px'
                  }}
                  src="data:image/png;base64,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"
                ></img>
              </div>
              <div style={{ marginLeft: '8px' }}>
                <div
                  style={{
                    marginBottom: '4px',
                    fontSize: '15px',
                    fontWeight: '700'
                  }}
                >
                  {name}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <img
                    onClick={() => navigate('/profile')}
                    style={{ width: '20px', height: '20px' }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAxUlEQVRIie3SsW0CQRCF4S9wAxbCkRshogp0AY5dhREUgcigAYpwGZbchG3JmRFHcLO6FYmDG4juSSPt7Er/e7O7jOr0hm80t4Bv0Ead8HIL+B+O1Tplkjr5PvaKyVcW/IRz1EGXvtW9SQp8idcwKNOsM+D1PTdh1sb5YHhJDgv9taQkH+H3h7dYxV5TwQf9FphgF7DPMEmDF031U5QaDF9iVvWP+klSkm/xc2UyyYLDuy7tL+YZwIer/ilMPvCcYTDqX10AcWRae1nJ6gAAAAAASUVORK5CYII="
                  ></img>
                  <span
                    onClick={() => navigate('/profile')}
                    style={{
                      padding: '0 3px',
                      fontSize: '13px'
                    }}
                  >
                    Edit Profile
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="gift-group-function">
            <div className="gift-nav-element">
              <div className="gift-nav-element-icon">
                <img
                  onClick={() => {
                    navigate('/profile');
                  }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADMklEQVRoge2YT2gUVxzHP7NJFKPRiEe95aAWvHiq+Ac8VGhDD2o0qFDEIlsU/60oaCTkkpIN1Us0ElsVK9bYGL1V8KJBD948KCIinkS9RFv/pSU7v28P49qlrmZm3iMTIV8Y3u7M7Pw+n/fe7mMfTGYyTgm8P3FgaBWBrSe0ZZjNw0Iwe4yFNxADbP72qs9y/gQuXlsAuV+Qlr6D5n0rq2xvUrKt5Fvu+yjrR2Dw+koUXEaaNQZ8+fVfSKvJt15zLe0uEPX8rQTwUQt/MmpL2LHRaSRyzgLRtEkGL0EYNkJ4GsmpE90EBoZWxZjzH8L/d+5Les58lZ0AanWAj97L1rkQ1DrxW7jUER6k5S4IbiNgNtcRHqS5GQqEMxzhQZqRoYAzfHRkJuADXpaRgBR4gXccgXSLyJk/vkal35A1OsNHxzAWrOXgtqGkKOlGQKVOj/AgzSEIu9KgpFsHZE0e4cvTaEEalHQjYPbEMzygZ+MoEJ71DA/Sr+MnMDL9MLJ+JPMAb8B5GoIjaVDc/g8cO9ePWatbzwf9tO3YkBbBcSHTFTd4gPCKC4KbwIhdRBpOD6/njNZdyk5g33dvMPWmhAejh47tr7MTAKh51YnsTmJ4cY/pYdG1vLvAzp3/gDYgniWAf0ouWEehMOJa3t++UHdfE9jDGPBQY00c2PPIR1m/O3PFXo0Jj+DQbm91PWyrVCQOvOf4EyiebIgFL0Gx2OCrrD8BjTTHggcYnfqNr7J+5mJXbzMWngVmjwkfZRhpNe2FG66l3QS6ehah3H5km6JnxYIvx4Bz5HLdtO26mxYhuUBHXz31pRZCtoBW8H5vMxF8ZQQMEXCKUv0gHfm3SXDiC3T3LUb2A1IraGbsL2yyvARdQDpO+97bcT4wtkDx5HxypU5ka5CC2D+VyeErI2CQGmvj4N4Hn7rx0wI/ndiE7GekabFWWD/wlXmL9D3thf6P3fBxgcMn1mL2O1IuI/hyjEAtHCpcrnaxusCPR+dQV/sQqTFj+HJeUDu1iQPbXvz/QvWFbEpdfgLBA8wm/Dtf7UJ1AVnzBIJ/VyNorna6uoBp4YSCj/LFeBWazGQ+p/wLer+IBJVeJ8AAAAAASUVORK5CYII="
                />
              </div>
              <div className="gift-nav-element-title">
                <span
                  onClick={() => {
                    navigate('/profile');
                  }}
                >
                  My Profile
                </span>
              </div>
            </div>
            <div className="gift-nav-element">
              <div className="gift-nav-element-icon">
                <img
                  onClick={() => {
                    navigate('/order');
                  }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABfElEQVRoge2VsUvDQBTGv5c0oUG6FDOYP0Xo6C6IY3VxdVWnWnR3cHbL6NLdTfSvcDZLpyrSEkjOQUNzIcXzzOUMvB9kuPDu8r28974DGIbpNKQStJ+IZwC7BIxygAh4/N5scv00i2jUVAJCJa5pZhH9qM9pQ4hJOAHb9HQ2PdzeIV2tGhXiB33snZ78ep9WBZoWDwDpUu9MrQT8oK/1MRNnso3ahhOwTecTaO0e2OTzxVmt3gNq3tXOWWyjtjE6Ayp9zTOgEsQzYBC+B/4Mz0DH4QRso+VCVVRcqeoy1T3tulAVHSdpyMnYhWzT+QTkIT6c+tticE2CxgB27EhaEx7crFuXKIFAPHcWE9xP0+K1lEBIwytBdGal4WsQrldeRgDOQwwxBy6Kl1ILZY5/lDseqo8t6rRkjn9cjpEqIFyv9ue/vryZ1LmRSgUKsvJCqkDu9uL/XoHc8eJyjFSBxTKYDLYyEMQYXz1nFeFK8hIBit8/3EtbehiGMcAnu3Smwyi63wAAAAAASUVORK5CYII="
                ></img>
              </div>
              <div className="gift-nav-element-title">
                <span
                  onClick={() => {
                    navigate('/order');
                  }}
                >
                  Order
                </span>
              </div>
            </div>

            <div className="gift-nav-element">
              <div className="gift-nav-element-icon">
                <img
                  onClick={() => {}}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRoge2UPU/CUBSG34toYmJiopMDrvIb/Bj4AY6mIS5OxJ0BBhJwk0R3nVwsxNUdGYTZ1Rhd2m6AYVc5DgUDpS1yarhIzpM0aXtz3vs+6QcgCPqwqjDsCrpWFYVp5to1FDoP6HbqMKJ2UNxBx8QRKVQAxPtJ5UQa+UlznRpKUCj2L7+UwslGCrfcHjHOkFWFMVIeAAg520QpbM5THgCWiHAT5UmwBBThGsPlfxZQDJLwKT8gDsIVpwfAFCCFi8BFH4mQ8m4e4ZLTw92OiW0iB4XzkORyIo38pPJQKG2mcMbtwRYAJkusrKMZX8VeyO6RyrsREQmSWF5zj5CdI5d3Y4Zon2abRNjlhsWM8Ve5d5flxuH95TVghRo79fsDwPMRRyk/W9T+4Iz1F5onREA3XoGGlhbTQngcnPr+Rp+2ksTJ3Tafx+5Zx8mpc5zPj8C1w9bbSOeFe4X+HSKgGxHQjQjoRgR0IwK6EQHdiIBuREA3IqAbEdDNwgo4M23xe2zvDV8Bol4G8ydhx4CM7hKCIPwx30B7bMWuBFzhAAAAAElFTkSuQmCC"
                />
              </div>
              <div className="gift-nav-element-title">
                <span>Gift</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gift-main">
          <div className="gift-title">
            <div style={{ padding: '5px 0', height: '100%' }}>
              <span>My Gift</span>
            </div>
            <div>
              <span style={{ fontSize: '13px' }}>
                The more your order, the more your gift
              </span>
            </div>
          </div>
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
                        <span>{e.title}</span>
                      </div>
                      <div>
                        <span style={{ color: 'red', fontSize: '12px' }}>
                          Discount: {e.discount}%
                        </span>
                      </div>
                      <div>
                        {new Date(e.date).getTime() > currentDay.getTime() ? (
                          <span style={{ fontSize: '11px' }}>
                            Valid till: {e.date}
                          </span>
                        ) : (
                          <span style={{ fontSize: '11px', color: 'red' }}>
                            Valid till: {e.date}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <span
                      onClick={() => {
                        navigate('/');
                      }}
                    >
                      Use
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
