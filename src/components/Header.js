import * as React from 'react'
import classNames from 'classnames';
import main from '../settings/main.json';
import header from '../settings/header.json';
import ResponsiveImage from './ResponsiveImage';
import LinkInternalExternal from './LinkInternalExternal';

const Layout = () => {

  const [showDropDown, setShowDropDown] = React.useState(false);
  return (
    <nav className="border-b border-gray-200 dark:bg-gray-900 w-screen z-20 ">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-2 px-8 xl:px-0">
          <LinkInternalExternal to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <ResponsiveImage
                alt={main.photo.alt}
                src={main.photo.image}
                size='md'
                className="h-12 w-12"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">{main.title}</span>
          </LinkInternalExternal>
          <button onClick={() => setShowDropDown(!showDropDown)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-brand-gray rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div className={classNames({
            "w-full block md:w-auto pr-4" : showDropDown,
            "hidden md:block md:w-auto pr-4" : !showDropDown,
          })}>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              {header.nav.map((item, index) => (
                <li key={item.id || index}>
                  <LinkInternalExternal to={item.permalink} className="block py-2 px-3 md:border-b border-transparent hover:border-white  md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700  md:dark:hover:bg-transparent" aria-current="page">{item.name}</LinkInternalExternal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Layout
