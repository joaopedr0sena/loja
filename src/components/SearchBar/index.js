import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function SearchBar(props) {
  const [valueState, setValueState] = useState('');
  const [searchState, setSearchState] = useState(false);

  function handleChange({ target: { value } }) {
    setValueState(value);
  }

  function checkInpunt(value) {
    if (value === '') {
      return setSearchState(false);
    }
    return setSearchState(true);
  }

  useEffect(() => {
    setSearchState(false);
  }, [props]);

  return (
    <div>
      <input
        type="text"
        value={valueState}
        onChange={handleChange}
        onKeyPress={({ key }) => (key === 'Enter' ? checkInpunt(valueState) : false)}
      />
      {searchState && <Redirect to={`/search/${valueState}`} />}
    </div>
  );
}
