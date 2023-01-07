import React from 'react';
import LoadingContainer from '../../atoms/loading';
import Header from '../../organisms/header';

export default function ListsTemplate({ subtitle, list, loading }) {
  return (
    <div className="">
      <Header />
      {subtitle && subtitle}
      <div className="flex justify-center">
        {!loading ? list : <LoadingContainer />}
      </div>
    </div>
  );
}
