const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ actions, graphql }) => {
    
    try {

        const { createPage } = actions;

        const pagesResults = await graphql(`
            {
                pages: allSitePage {
                    nodes {
                        id
                    }
                }
            }
        `);

        if (pagesResults.errors) {
            console.error("GraphQL query errors:", pagesResults.errors);
            throw new Error("Error while running GraphQL query.");
        }

        // Only create pages if there are valid nodes with a permalink
        const nodes = pagesResults?.data?.pages?.nodes || [];
        nodes.forEach((node) => {
            if (!node.permalink) return; // Skip if no permalink
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