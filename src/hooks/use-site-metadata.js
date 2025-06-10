import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `)
  
  if (typeof window !== "undefined" && window.__GATSBY_PREVIEW__) {
    return [] // Return empty or mock data in preview mode
  }

  return data.site.siteMetadata
}