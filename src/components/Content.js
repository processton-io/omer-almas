import classNames from 'classnames';
import * as React from 'react'
import ReactMarkdown from "react-markdown";

const Content = ({ content = '', variant = 'left-hand'}) => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className={classNames("px-8 xl:px-0 py-12",{
                "text-left" : variant === 'left-hand',
                "text-right" : variant === 'right-hand',
                "text-center" : variant === 'centered',
            })}>     
                <ReactMarkdown
                    components={{
                        h1: ({ children }) => <h1 className='text-4xl mb-5 mt-3 font-bold'>{children}</h1>,
                        h2: ({ children }) => <h2 className='text-3xl mb-4 mt-2'>{children}</h2>,
                        h3: ({ children }) => <h3 className='text-2xl mb-3 mt-2'>{children}</h3>,
                        h4: ({ children }) => <h4 className='text-xl mb-2 mt-1'>{children}</h4>,
                        h5: ({ children }) => <h5 className='text-lg mb-1 mt-1'>{children}</h5>,
                        h6: ({ children }) => <h6 className='text-lg mb-1 mt-1 font-bold'>{children}</h6>,
                        p: ({ children }) => <p className='text-ms mb-1 mt-1'>{children}</p>,
                        ul: ({ children }) => <ul className='list-disc ml-12 mt-2 mb-2'>{children}</ul>,
                        ol: ({ children }) => <ol className='list-decimal ml-12 mt-2 mb-2'>{children}</ol>,
                        li: ({ children }) => <li className='my-2'>{children}</li>,
                        a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
                    }} >
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default Content
