import React, { useState } from 'react';

export default function Gallery({ images }) {
  const [showImage, setShowImage] = useState(images[0].secure_url);

  return (
    <div className="flex flex-col w-full">
      <img
        className="max-h-96 w-min mx-auto"
        alt="product_image"
        src={showImage}
      />
      <ul className="flex flex-row overflow-x-auto w-min max-w-full mx-auto">
        {images.map(({
          secure_url: secureUrl,
          id: pictureId,
        }) => (
          <li
            key={pictureId}
            className={`cursor-pointer border-2 border-${showImage === secureUrl ? 'black' : 'quinary'}`}
            onClick={() => setShowImage(secureUrl)}
            role="presentation"
          >
            <div className="w-20 h-20">
              <img
                className="h-full mx-auto"
                alt="product_image"
                src={secureUrl}
                key={`${pictureId}`}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
