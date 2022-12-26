import { useState } from 'react';
import shortid from 'shortid';
import data from '../assets/staticdata.json';
import CheckList from './checklist';
import './addproduct.css';
import axios from 'axios';
export default function AddForm({ props }) {
  const [name, setName] = useState();
  const [cate, setCate] = useState();
  const [brand, setBrand] = useState();
  const [code, setCode] = useState(Array(data.size.length).fill(null));
  const [price, setPrice] = useState();
  const [avar, setAvar] = useState([]);
  const [obj, setObj] = useState({ size: '', color: '', quan: '' });
  const [listObj, setListObj] = useState([]);
  const [reRender, setReRender] = [props.reRender, props.setReRender];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'http://localhost:3001/host/upload-new-product';
    const token = localStorage.getItem('token');

    let formApi = new FormData();
    formApi.append('name', name);
    formApi.append('code', code);
    formApi.append('price', price);
    formApi.append('brand', brand);
    formApi.append('cate', cate);
    // formApi.append('size', size);
    // formApi.append('color', color);
    // formApi.append('quantity', quantity);

    avar.forEach((e) => {
      formApi.append('files', e);
    });

    const res = await axios
      .post(url, formApi, {
        headers: {
          // Authorization: `Basic ${token}`
        }
      })
      .then((res) => {
        setReRender((reRender) => !reRender);
      })
      .catch((e) => {
        throw e;
      });
  };
  return (
    <div className="addform">
      <div className="addform-flex-box">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="addform-detail-product">
              <div className="addform-same-format">
                <input
                  style={{ width: '200px' }}
                  placeholder="Name"
                  onChange={(e) => {
                    setName(() => e.target.value);
                  }}
                ></input>
                <input
                  style={{ width: '100px' }}
                  placeholder="Code"
                  onChange={(e) => {
                    setCode(() => e.target.value);
                  }}
                ></input>
                <input
                  style={{ width: '100px' }}
                  placeholder="Price"
                  type="text"
                  onChange={(e) => {
                    setPrice(() => e.target.value);
                  }}
                ></input>
              </div>
              <div
                style={{
                  height: '30px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start'
                }}
              >
                <select
                  value={cate}
                  onChange={(e) => {
                    setCate(e.target.value);
                  }}
                >
                  {data.cate.map((e, ind) => {
                    return (
                      <option value={e} key={shortid.generate()}>
                        {e}
                      </option>
                    );
                  })}
                </select>
                <select
                  value={brand}
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                >
                  {data.color.map((e, ind) => {
                    return (
                      <option value={e} key={shortid.generate()}>
                        {e}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="addform-another-format">
                <div>
                  <div>
                    <select
                      value={obj.size}
                      onChange={(e) => {
                        obj.size = e.target.value;
                        setObj(Object.assign({}, obj));
                      }}
                    >
                      <option value={'Size'}>Size</option>
                      {data.size.map((e, ind) => {
                        return <option value={e}>{e}</option>;
                      })}
                    </select>
                  </div>
                  <div>
                    <select
                      value={obj.color}
                      onChange={(e) => {
                        obj.color = e.target.value;
                        setObj(Object.assign({}, obj));
                      }}
                    >
                      <option value={'Color'}>Color</option>

                      {data.color.map((e, ind) => {
                        return <option value={e}>{e}</option>;
                      })}
                    </select>
                  </div>
                  <div>
                    <input
                      onChange={(e) => {
                        obj.quan = e.target.value;
                        setObj(Object.assign({}, obj));
                        console.log(obj);
                      }}
                      value={obj.quan}
                      type="text"
                      style={{
                        height: '30px',
                        border: 'none',
                        outline: 'none',
                        width: '80px'
                      }}
                      placeholder="0"
                    ></input>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        //check
                        console.log(obj);
                        if (
                          obj.color !== '' &&
                          obj.size !== '' &&
                          obj.quan !== ''
                        ) {
                          listObj.push(obj);
                          setObj({ size: '', color: '', quan: '' });
                          setListObj(Object.assign([], listObj));
                        } else alert('invalid');
                      }}
                      style={{
                        cursor: 'pointer',
                        width: '70px',
                        height: '30px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        marginLeft: '20px'
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>

                {listObj.length !== 0 && (
                  <div
                    style={{
                      backgroundColor: '#fff',
                      position: 'relative',
                      overflow: 'auto',
                      flex: '200px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      padding: '0 10px'
                    }}
                  >
                    {listObj.map((e, ind) => {
                      return (
                        <div
                          style={{
                            padding: '0 5px',
                            marginTop: '10px',
                            marginRight: '10px',
                            backgroundColor: '#f2f2f2',
                            display: 'flex',
                            flexDirection: 'row',
                            flex: '0 0 45%',
                            height: '30px',
                            justifyContent: 'space-between',
                            position: 'relative',
                            fontSize: '13px'
                          }}
                        >
                          <div>
                            <span>Size:{e.size}</span>
                          </div>
                          <div>
                            <span>Color:{e.color}</span>
                          </div>
                          <div>
                            <span>Quantity:{e.quan}</span>
                          </div>
                          <span
                            onClick={() => {
                              listObj.splice(ind, 1);
                              setListObj(Object.assign([], listObj));
                            }}
                            className="del-obj"
                            style={{
                              cursor: 'pointer',
                              display: 'flex',
                              justifyContent: 'center',
                              width: '30px',
                              height: '15px',
                              position: 'absolute',
                              top: '100%',
                              right: '0',
                              fontSize: '10px',
                              textDecoration: 'underline'
                            }}
                          >
                            delete
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="addform-picture">
              {avar.map((e) => {
                return (
                  <div
                    key={shortid.generate()}
                    style={{
                      flex: '0 0 50%',
                      height: '50%'
                    }}
                  >
                    <img
                      className="picture-element"
                      src={URL.createObjectURL(e)}
                    ></img>
                  </div>
                );
              })}
              <input
                multiple
                onChange={(e) => {
                  let clone = avar;
                  clone.push(e.target.files[0]);
                  let t = Object.assign([], clone);
                  setAvar(t);
                }}
                id="avar"
                type="file"
                hidden
                accept="image/png, image/jpeg"
              />
              <label
                htmlFor="avar"
                style={{
                  flex: '0 0 50%',
                  height: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f1f1f1'
                }}
              >
                <span>Add...</span>
              </label>
            </div>
          </div>
          <div className="addform-button-group">
            <button type="submit">Save</button>
            <button onClick={() => setReRender((reRender) => !reRender)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
