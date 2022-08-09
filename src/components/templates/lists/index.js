import React from 'react';

export default function ListsTemplate({ header, subtitle, list }) {
  return (
    <>
      {header}
      {subtitle && subtitle}
      <div className="flex justify-center">
        {list}
      </div>
    </>
  );
}
