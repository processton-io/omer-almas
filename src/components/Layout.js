import * as React from 'react'
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  console.log(children.type.name)
  // if 
  return (
    <div>
      <Header />
      <main className='main-wrapper relative overflow-hidden space-top-64'>
        {children.type.name === 'Dev404Page' ? (
          <div className='container mx-auto'>
            <div className=''>
              {children}
            </div>
          </div>
        ) : children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
