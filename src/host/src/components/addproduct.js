import { useState } from 'react';
import shortid from 'shortid';
import Dropdown from 'react-dropdown';
import data from '../assets/staticdata.json';
import CheckList from './checklist';
import './addproduct.css';
export default function AddForm({ props }) {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [avar, setAvar] = useState();
  const [cancel, setCancel] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="addform" key={cancel}>
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
                    setName(() => e.target.value);
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
                  options={data.cate}
                  placeholder={'category'}
                ></Dropdown>
              </div>
              <div className="addform-another-format">
                <CheckList props={[data.size, data.color]}></CheckList>
              </div>
            </div>
            <div className="addform-picture">
              <input
                onChange={(e) => {
                  let avarUrl = URL.createObjectURL(e.target.files[0]);
                  setAvar(() => avarUrl);
                }}
                id="avar"
                type="file"
                hidden
                accept="image/png, image/jpeg"
              />
              <label htmlFor="avar">{avar && <img src={avar}></img>}</label>
            </div>
          </div>
          <div className="addform-button-group">
            <button type="submit">Save</button>
            <button onClick={() => setCancel((cancel) => !cancel)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
