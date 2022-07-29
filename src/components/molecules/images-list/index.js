import React from 'react';
import ImagesListItem from '../../atoms/image-list-item';

export default function ImagesList({ images, title }) {
  return (
    <div>
      {images.map(({
        secure_url: secureUrl,
        id: pictureId,
      }) => (
        <ImagesListItem
          url={secureUrl}
          title={title}
          key={pictureId}
        />
      ))}
    </div>
  );
}
