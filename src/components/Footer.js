import React from "react";
import footer from '../settings/footer.json'
import ResponsiveImage from './ResponsiveImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import LinkInternalExternal from "./LinkInternalExternal";

const Footer = () => {
    return  (<footer className="border-t">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between md:space-x-24">
              <div className="md:flex-1 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 pt-12">
                <div>
                    <h2 className="mb-4 text-sm font-semibold  uppercase dark:">{footer.section_1_title}</h2>
                    <ul className=" text-xs dark:text-gray-400 list-disc pl-6">
                    {footer.section_1_links.map((link, index) => <li key={link.id || index} className="mb-2">
                        <LinkInternalExternal to={link.permalink} className="hover:underline">{link.name}</LinkInternalExternal>
                    </li> )}
                    </ul>
                </div>
                <div>
                    <h2 className="mb-4 text-sm font-semibold  uppercase dark:">{footer.section_2_title}</h2>
                    <ul className=" text-xs dark:text-gray-400 list-disc pl-6">
                    {footer.section_2_links.map((link, index) => <li key={link.id || index} className="mb-2">
                        <LinkInternalExternal to={link.permalink} className="hover:underline">{link.name}</LinkInternalExternal>
                    </li> )}
                    </ul>
                </div>
                <div>
                    <h2 className="mb-4 text-sm font-semibold  uppercase dark:">{footer.section_3_title}</h2>
                    <ul className=" text-xs dark:text-gray-400 list-disc pl-6">
                    {footer.section_3_links.map((link, index) => <li key={link.id || index} className="mb-2">
                        <LinkInternalExternal to={link.permalink} className="hover:underline">{link.name}</LinkInternalExternal>
                    </li> )}
                    </ul>
                </div>
              </div>
          </div>
          <hr className="my-6 border-gray-50 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm  sm:text-center dark:text-gray-400">{footer.copyright} Powered by <a href="https://ahmadkokab.me/" className="hover:underline">Ahmad Kokab</a>
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                    {footer.social_links.map((link, index) => {
                        return <LinkInternalExternal key={link.id || index} to={link.permalink} target="_blank" rel="noreferrer" className=" hover:text-gray-300 dark:hover: ms-5">
                            { link.platform === 'facebook' && <FontAwesomeIcon icon={faFacebookF} />}
                            { link.platform === 'twitter' && <FontAwesomeIcon icon={faTwitter} />}
                            { link.platform === 'linkedin' && <FontAwesomeIcon icon={faLinkedin} />}
                            { link.platform === 'youtube' && <FontAwesomeIcon icon={faYoutube} />}
                            { link.platform === 'instagram' && <FontAwesomeIcon icon={faInstagram} />}
                            <span className="sr-only">{link.platform}</span>
                        </LinkInternalExternal>
                    })}
              </div>
          </div>
        </div>
    </footer>)
    
}

export default Footer;