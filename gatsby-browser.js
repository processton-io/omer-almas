import * as React from 'react'
import './src/styles/global.css'
import { lazy, Suspense } from 'react';

const Layout = lazy(() => import('./src/components/Layout'));

export const wrapPageElement = ({ element, props }) => {
  // Wrap Layout with Suspense to handle lazy loading
  return (
    <Suspense fallback={<div></div>}>
      <Layout {...props}>{element}</Layout>
    </Suspense>
  );
}
