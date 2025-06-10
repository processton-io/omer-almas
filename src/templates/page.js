import * as React from 'react'
import {Seo} from '../components/Seo'
import PageBuilder from '../components/PageBuilder'

const Page = ({ pageContext }) => {
    
    const { blocks } = pageContext;
    
    return <>
        <PageBuilder blocks={blocks} />
    </>
}

export const Head = ({ pageContext }) => <Seo {...pageContext.seo} />

export default Page;