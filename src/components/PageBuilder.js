import React from 'react'
import Contact from './Contact';
import Content from './Content';

export default function PageBuilder({ blocks, preview = false }) {
  return (
    <>
      {blocks &&
        blocks.map((block, i) => (
          <div key={block.id || i}> {/* Ensure each block has a unique key */}
            {(() => {
              switch (block.type) {
                case 'contact_form':
                  return <Contact title={block.title} address={block.address} contact_number={block.contact_number} email_address={block.email_address} url={block.url} />
                case 'content':
                  return <Content content={block.content} variant={block.variant}/>
                default:
                  return (
                    <div className='container mx-auto'>
                      <div className='text-center'>
                        Missing Section {block.type}
                      </div>
                    </div>
                  );
              }
            })()}
          </div>
        ))}
    </>
  );
}
