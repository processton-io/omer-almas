import * as React from 'react'
import { lazy, Suspense } from 'react';

// Import the Layout component
// Note: Lazy loading isn't typically necessary or beneficial in gatsby-ssr.js
// as the server needs the component synchronously during the build.
import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => {
  // Wrap pages with the Layout component
  // No Suspense needed here as SSR is synchronous
  return (
    <Layout {...props}>{element}</Layout>
  );
}

// You might also need to import global CSS here if Layout relies on it
// import './src/styles/global.css'
// However, importing CSS in gatsby-ssr.js is often handled differently,
// typically via gatsby-browser.js or directly in Layout/components.
// Only add it if you encounter styling issues during build or initial load.
