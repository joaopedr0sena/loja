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
    if (value) return setSearchState(true);
    return setSearchState(false);
  };

  useEffect(() => {
    if (searchState) {
      history.push(`/search/${valueState}`);
      setSearchState(false);
    }
  }, [history, searchState, valueState]);

  return (
    <input
      type="text"
      value={valueState}
      onChange={handleChange}
      onKeyPress={({ charCode }) => (charCode === 13 ? checkInpunt(valueState) : false)}
      className="text-secondary rounded text-xs h-8 w-full max-w-screen-lg text-xl pl-2"
    />
  );
}
