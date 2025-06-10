import * as React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const ResponsiveImage = ({ src, alt, className = '', size = 'full' }) => {

    
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: { sourceInstanceName: { eq: "Images" } }) {
                nodes {
                    relativePath
                    full: childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                    xl: childImageSharp {
                        gatsbyImageData(width: 768, layout: CONSTRAINED)
                    }
                    lg: childImageSharp {
                        gatsbyImageData(width: 550, layout: CONSTRAINED)
                    }
                    md: childImageSharp {
                        gatsbyImageData(width: 400, layout: CONSTRAINED)
                    }
                    sm: childImageSharp {
                        gatsbyImageData(width: 150, layout: CONSTRAINED)
                    }
                    xs: childImageSharp {
                        gatsbyImageData(width: 46, layout: CONSTRAINED)
                    }
                }
            }
        }
    `);

  let path = src.split('/').pop()


  const fileNode = data.allFile.nodes.find(node => node.relativePath === path);

  if (!fileNode?.full) return <img className={className} src={src} alt={alt} />;

  switch (size){
    case 'xs':
        return <GatsbyImage className={className} image={getImage(fileNode.xs)} alt={alt} />
    case 'sm':
        return <GatsbyImage className={className} image={getImage(fileNode.sm)} alt={alt} />
    case 'md':
        return <GatsbyImage className={className} image={getImage(fileNode.md)} alt={alt} />
    case 'lg':
        return <GatsbyImage className={className} image={getImage(fileNode.lg)} alt={alt} />
    case 'xl':
        return <GatsbyImage className={className} image={getImage(fileNode.xl)} alt={alt} />
    default:
        return <GatsbyImage className={className} image={getImage(fileNode.full)} alt={alt} />
  }
};

export default ResponsiveImage;