import React, { useState } from 'react';

export default function SearchBar() {
  const [valueState, setValueState] = useState('');

  function handleChange({ target: { value } }) {
    setValueState(value);
  }

  return (
    <input type="text" value={valueState} onChange={handleChange} />
  );
}
