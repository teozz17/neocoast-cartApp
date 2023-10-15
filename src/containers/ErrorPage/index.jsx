import React from 'react';

import notFound from 'Assets/notFound.jpg';

import './styles.scss';

const ErrorPage = () => (
  <div className="error-page">
    <h1>
      The route doesn&apos;t exist
    </h1>
    <img
      className="error-page__image"
      src={notFound}
      alt="not found"
    />
  </div>
);

export default ErrorPage;
