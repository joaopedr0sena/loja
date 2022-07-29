import React from 'react';

export default function ImagesListItem({ url, title }) {
  return (
    <img
      src={url}
      alt={title}
      width="100px"
    />
  );
}
