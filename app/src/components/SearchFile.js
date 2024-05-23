/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './SearchFile.css';
import { React, Fragment, useState } from 'react';

const SearchFile = ({ title, onSearch }) => {
  const [serachActive, setSearchActive] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Fragment>
      {
        !serachActive
        && <>
          <div className="app-name mb-3">
            <span>Markdown Editer</span>
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => { setSearchActive(true); }}>Search</button>
          </div>
        </>
      }
      {
        serachActive
        && <>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search File"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={value}
              onChange={(e) => { setValue(e.target.value); }}
            />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => { setSearchActive(false); }}>X Close</button>
          </div>
        </>
      }
    </Fragment>
  );
};

export default SearchFile;
