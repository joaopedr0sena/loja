import React from 'react';
import CustomImage from '../../atoms/image';

export default function ImagesList({ images, title }) {
  return (
    <div>
      {images.map(({
        secure_url: secureUrl,
        id: pictureId,
      }) => (
        <CustomImage
          url={secureUrl}
          title={title}
          key={pictureId}
        />
      ))}
    </div>
  );
}
