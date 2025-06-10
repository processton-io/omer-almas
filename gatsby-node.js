const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ actions, graphql }) => {
    
    try {

        const { createPage } = actions;

        const pagesResults = await graphql(`
            {
                pages: allPagesJson {
                    nodes {
                        id
                        permalink
                        title
                        seo {
                            title
                            ogimage
                            description
                        }
                        blocks {
                            group
                            title
                            description
                            type
                            address
                            contact_number
                            email_address
                            url
                            content
                            variant
                        }
                    }
                }
            }
        `);

        if (pagesResults.errors) {
            console.error("GraphQL query errors:", pagesResults.errors);
            throw new Error("Error while running GraphQL query.");
        }

        pagesResults?.data?.pages?.nodes.forEach((node) => {
            const component = path.resolve(`src/templates/page.js`);

            console.log(`Creating page ${node.title} with ${node.permalink}`);

            createPage({
                path: node.permalink,
                component,
                context: node,
            });
        });
    } catch (error) {
        console.error("Error in createPages:", error);
    }
};