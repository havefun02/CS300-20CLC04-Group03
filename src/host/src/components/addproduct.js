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
  const [code, setCode] = useState();
  const [price, setPrice] = useState();
  const [avar, setAvar] = useState([]);
  const [property, setProperty] = useState(Array(data.size.length).fill(null));
  const [reRender, setReRender] = [props.reRender, props.setReRender];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'http://localhost:3001/host/upload-new-product';
    const token = localStorage.getItem('token');
    let cloneProperty = property.filter((e) => e !== null);

    let formApi = new FormData();
    formApi.append('name', name);
    formApi.append('code', code);
    formApi.append('price', price);
    formApi.append('brand', brand);
    formApi.append('cate', cate);
    avar.forEach((e) => {
      formApi.append('files', e);
    });
    cloneProperty.forEach((e) => {
      formApi.append('size', e.size);
      formApi.append('color', e.color);
      formApi.append('quantity', e.quantity);
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
                  padding: '0 8px',
                  height: '30px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start'
                }}
              >
                <select
                  onChange={(e) => {
                    setCate(e.target.value);
                  }}
                >
                  {data.cate.map((e, ind) => {
                    return  <option key={shortid.generate()}>{e}</option>;
                  })}
                </select>
                <select
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                >
                  {data.color.map((e, ind) => {
                    return <option key={shortid.generate()}>{e}</option>;
                  })}
                </select>
              </div>
              <div className="addform-another-format">
                <CheckList
                  props={{
                    size: data.size,
                    color: data.color,
                    property: property,
                    setProperty: setProperty
                  }}
                ></CheckList>
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
