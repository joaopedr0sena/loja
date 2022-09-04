import React from 'react';

export default function ListsTemplate({ header, subtitle, list }) {
  return (
    <div className="bg-quinary">
      {header}
      {subtitle && subtitle}
      <div className="flex justify-center">
        {list}
      </div>
    </div>
  );
}
