import React from 'react';

export default function CustomImage({ url, title }) {
  return (
    <img
      src={url}
      alt={title}
      width="100px"
    />
  );
}
