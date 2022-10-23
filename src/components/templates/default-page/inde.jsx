import React from 'react';
import LoadingContainer from '../../atoms/loading';
import Header from '../../organisms/header';

export default function DefaultPage({ loading = false, children }) {
  return (
    <>
      <Header />
      {!loading ? children : <LoadingContainer />}
    </>
  );
}
