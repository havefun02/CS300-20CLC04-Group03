import { useState } from 'react';
import shortid from 'shortid';
import Dropdown from 'react-dropdown';
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
      console.log(e);
      formApi.append('size', e.size);
      formApi.append('color', e.color);
      formApi.append('quantity', e.quantity);
    });

    console.log(formApi);
    const res = await axios
      .post(url, formApi, {
        headers: {
          // Authorization: `Basic ${token}`
        }
      })
      .then((res) => {
        console.log(res);
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
                  placeholder="Name"
                  onChange={(e) => {
                    setName(() => e.target.value);
                  }}
                ></input>
                <input
                  placeholder="Code"
                  onChange={(e) => {
                    setCode(() => e.target.value);
                  }}
                ></input>
                <input
                  placeholder="Price(VND)"
                  type="text"
                  onChange={(e) => {
                    setPrice(() => e.target.value);
                  }}
                ></input>
                <Dropdown
                  onChange={(e) => {
                    setBrand(e.value);
                  }}
                  options={data.brand}
                  placeholder="Brand"
                ></Dropdown>
                <Dropdown
                  onChange={(e) => {
                    setCate(e.value);
                  }}
                  options={data.cate}
                  placeholder="Cate"
                ></Dropdown>
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
                console.log(e);
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
                  console.log(avar);
                  clone.push(e.target.files[0]);
                  let t = Object.assign([], clone);
                  console.log(t);
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
