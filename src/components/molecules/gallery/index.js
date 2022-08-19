import React, { useState } from 'react';

export default function Gallery({ images }) {
  const [showImage, setShowImage] = useState(images[0].secure_url);

  return (
    <div className="flex flex-col">
      <img
        className="h-96 w-min mx-auto"
        alt="product_image"
        src={showImage}
      />
      <ul className="flex flex-row overflow-x-auto">
        {images.map(({
          secure_url: secureUrl,
          id: pictureId,
        }) => (
          <li
            key={pictureId}
            className={`cursor-pointer border-2 border-${showImage === secureUrl ? 'black' : 'quinary'} flex-none`}
            onClick={() => setShowImage(secureUrl)}
            role="presentation"
          >
            <img
              className="w-20 h-20"
              alt="product_image"
              src={secureUrl}
              key={`${pictureId}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
