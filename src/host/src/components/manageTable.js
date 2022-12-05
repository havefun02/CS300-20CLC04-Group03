import { useState } from 'react';
import shortid from 'shortid';
import './manageTable.css';
export default function ManageTable({ props }) {
  const [header, setHeader] = useState(props.header);
  const [headerSize, setHeaderSize] = useState(props.size);

  const [list, setList] = useState(props.list);
  const HeaderTable = ({ props }) => {
    return (
      <div className="header-table">
        {props.header.map((ele) => {
          return (
            <div
              key={shortid.generate()}
              style={{ flex: props.headerSize[props.header.indexOf(ele)] }}
            >
              <span>{ele}</span>
            </div>
          );
        })}
      </div>
    );
  };

  const RowData = ({ props }) => {
    const [expand, setExpand] = useState(false);

    return (
      <>
        <div className="row-data">
          {props.ele.map((e) => {
            return (
              <div
                key={shortid.generate()}
                style={{ flex: props.headerSize[props.ele.indexOf(e)] }}
              >
                <span>{e}</span>
              </div>
            );
          })}
          {!expand ? (
            <img
              onClick={() => {
                setExpand((expand) => !expand);
              }}
              className="expand-row"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAb0lEQVRIie2PsQ2AMAwELyyWcVIyCqSCaQmNI1kIRwEF0fjq998bHMf5lQDEjlyU7OPyDBzA3MglyeyWZGocFzlaDEkCNqu4hwCsIrp+UpcXGuvfSoaVa0lWklqeR5RrSf1k2HJL8km5lnxW7jj3nAwCHOMFhaBLAAAAAElFTkSuQmCC"
            />
          ) : (
            <img
              onClick={() => {
                setExpand((expand) => !expand);
              }}
              className="expand-row"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAbElEQVRIie2Q0QnAIAwFr4uIdIP+dP8JdIIinaT9iSClSEIV+pGDgCh5Hg8cx/kdUWYKATiAE1hnhV8yQz+JQJHg8jh/rqs1r9Zvd8PCNW8qFiDTr6KtLsuOiU0We3YBSMBuDa9orMzmjmPjBhOHH8tY0fZoAAAAAElFTkSuQmCC"
            ></img>
          )}
        </div>
        {expand && (
          <div className="manage-table-expand-row">
            <div className="manage-table-expand">
              <div className="manage-table-content-group">
                {props.ele.map((e) => {
                  return (
                    <div
                      style={{ flex: props.headerSize[props.ele.indexOf(e)] }}
                      key={shortid.generate()}
                    >
                      <span>{e}</span>
                    </div>
                  );
                })}
              </div>
              <div className="manage-table-bt-group">
                <button onClick={() => setExpand((expand) => !expand)}>
                  Save
                </button>
                <button onClick={() => setExpand((expand) => !expand)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  return (
    <div className="manage-table">
      <div className="manage-table-flex-box">
        <HeaderTable props={{ headerSize, header }}></HeaderTable>
        <div className="manage-table-row">
          {list.map((ele) => {
            return (
              <RowData
                key={shortid.generate()}
                props={{ headerSize, ele }}
              ></RowData>
            );
          })}
        </div>
        <div className="manage-table-footer">
          <span>Total: 200</span>
          <span>Out of stock: 100</span>
        </div>
      </div>
    </div>
  );
}
