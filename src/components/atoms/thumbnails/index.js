import React from 'react';

export default function Thumbnail({ img, title }) {
  return (
    <img
      alt={title}
      className="h-1/2 w-full rounded-xl"
      src={img}
    />
  );
}
