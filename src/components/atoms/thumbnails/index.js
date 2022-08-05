import React from 'react';

export default function Thumbnail({ img, title }) {
  return (
    <img
      alt={title}
      className="w-24 h-24"
      src={img}
    />
  );
}
