import React from 'react';

export default function Thumbnail({ img, title }) {
  return (
    <img
      alt={title}
      className="w-full h-full rounded-xl"
      src={img}
    />
  );
}
