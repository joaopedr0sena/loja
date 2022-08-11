import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function SearchBar() {
  const history = useHistory();
  const [valueState, setValueState] = useState('');
  const [searchState, setSearchState] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setValueState(value);
  };

  const checkInpunt = (value) => {
    if (!value) return setSearchState(false);
    return setSearchState(true);
  };

  useEffect(() => {
    if (searchState) {
      history.push(`/search/${valueState}`);
    }
  }, [history, searchState, valueState]);

  useEffect(() => {
    setSearchState(false);
  }, [setSearchState]);

  return (
    <input
      type="text"
      value={valueState}
      onChange={handleChange}
      onKeyPress={({ key }) => (key === 'Enter' ? checkInpunt(valueState) : false)}
      className="rounded-xl text-xs h-8 w-full text-xl pl-2"
    />
  );
}
