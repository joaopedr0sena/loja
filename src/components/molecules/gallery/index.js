import React, { useState } from 'react';

export default function Gallery({ images }) {
  const [showImage, setShowImage] = useState(images[0].secure_url);

  return (
    <div className="flex flex-row-reverse w-full">
      <img
        className="h-96 w-min max-h-80 mx-auto"
        alt="product_image"
        src={showImage}
      />
      <div className="flex flex-col overflow-x-auto max-h-96">
        <ul>
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
    </div>
  );
}
