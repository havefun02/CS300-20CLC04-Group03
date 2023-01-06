import { useState } from 'react';
import shortid from 'shortid';
import data from '../assets/staticdata.json';
import './addproduct.css';
import axios from 'axios';
export default function AddForm({ props }) {
  const [newIn, setNewIn] = useState(false);
  const [name, setName] = useState(null);
  const [cate, setCate] = useState(null);
  const [brand, setBrand] = useState(null);
  const [code, setCode] = useState(Array(data.size.length).fill(null));
  const [price, setPrice] = useState(null);
  const [avar, setAvar] = useState([]);
  const [descript, setDecript] = useState(null);
  const [obj, setObj] = useState({ size: '', color: '', quan: '' });
  const [listObj, setListObj] = useState([]);
  const [reRender, setReRender] = [props.reRender, props.setReRender];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'http://localhost:3001/host/upload-new-product';
    const token = localStorage.getItem('token');
    const options = {
      headers: {
        Authorization: 'Bearer ' + token
        // 'content-type': 'multipart/form-data'
      }
    };
    let size = [];
    let color = [];
    let quan = [];
    listObj.forEach((e) => {
      size.push(e.size);
      color.push(e.color);
      quan.push(e.quan);
    });
    if (
      size.length > 0 &&
      color.length > 0 &&
      price !== null &&
      code !== null &&
      price > 0 &&
      avar.length > 0
    ) {
      let formApi = new FormData();
      formApi.append('new', newIn);
      formApi.append('id_product', shortid.generate());
      formApi.append('name', name);
      formApi.append('code', code);
      formApi.append('price', price);
      formApi.append('brand', brand);
      formApi.append('cate', cate);
      formApi.append('size', size);
      formApi.append('color', color);
      formApi.append('quan', quan);
      formApi.append('descript', descript);
      formApi.append('sex', document.getElementById('gender').value);

      avar.forEach((e) => {
        formApi.append('files', e);
      });

      const res = await axios
        .post(url, formApi, options)
        .then((res) => {
          setReRender((reRender) => !reRender);
        })
        .catch((e) => {
          throw e;
        });
    } else alert('invalid input');
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
                  <option>Category(Default)</option>
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
                  <option>Brand(Default)</option>
                  {data.brand.map((e, ind) => {
                    return (
                      <option value={e} key={shortid.generate()}>
                        {e}
                      </option>
                    );
                  })}
                </select>
                <select style={{ width: '70px' }} id="gender">
                  <option key={shortid.generate()}>Men</option>
                  <option key={shortid.generate()}>Women</option>
                </select>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '70px',
                    justifyContent: 'space-between'
                  }}
                >
                  <label>New In</label>
                  <input
                    onChange={() => {
                      setNewIn((newIn) => !newIn);
                    }}
                    type="checkbox"
                  ></input>
                </div>
              </div>
              <div
                style={{
                  width: '100%',
                  paddingRight: '5px',
                  border: 'none'
                }}
              >
                <textarea
                  onChange={(e) => {
                    setDecript(e.target.value);
                  }}
                  placeholder="Description"
                  style={{ padding: '5px', width: '100%', outline: 'none' }}
                ></textarea>
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
                        return (
                          <option key={shortid.generate()} value={e}>
                            {e}
                          </option>
                        );
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
                        width: '80px',
                        textIndent: '5px'
                      }}
                      placeholder="0"
                    ></input>
                  </div>
                  <div>
                    <button
                      type="button"
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
                        marginLeft: '20px',
                        backgroundColor: '#000',
                        color: '#fff'
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>

                {listObj.length !== 0 && (
                  <div
                    style={{
                      padding: '5px 0',
                      paddingRight: '20px',
                      backgroundColor: '#ddd',
                      position: 'relative',
                      overflow: 'auto',
                      maxHeight: '150px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      flexDirection: 'row',
                      justifyContent: 'space-between'
                    }}
                  >
                    {listObj.map((e, ind) => {
                      return (
                        <div
                          style={{
                            padding: '0 10px',
                            backgroundColor: '#f2f2f2',
                            display: 'flex',
                            flexDirection: 'row',
                            flex: '0 0 45%',
                            height: '30px',
                            justifyContent: 'space-between',
                            position: 'relative',
                            fontSize: '13px',
                            marginBottom: '8px'
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
                              width: '10px',
                              height: '10px',
                              position: 'absolute',
                              top: '0',
                              right: '0',
                              fontSize: '10px',
                              backgroundColor: '#000',
                              color: '#fff',
                              lineHeight: '1'
                            }}
                          >
                            x
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
