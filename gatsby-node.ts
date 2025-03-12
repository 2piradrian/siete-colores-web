import { ProductEntity } from './src/domain/entity/product';
const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const categoriesResult = await graphql(`
    query {
      allCategoriesJson {
        edges {
          node {
            name
          }
        }
      }
    }
  `);

  const productsResult = await graphql(`
    query {
      allProductsJson {
        edges {
          node {
            id
            code
            name
            size
            price
            offertPrice
            category
            subcategories
            keywords
            createdAt
            description
            available
          }
        }
      }
    }
  `);

  const categories = categoriesResult.data.allCategoriesJson.edges;
  const products = productsResult.data.allProductsJson.edges;

  const productList = products.map(product => {
    return ProductEntity.fromObject({...product.node});
  });

  categories.forEach(category => {
    createPage({
      path: `/productos/${category.node.name.toLowerCase()}`,
      component: path.resolve(`./src/pages/productos/[category].tsx`),
      context: {
        static_categoryName: category.node.name,
      },
    });
  });

  productList.forEach(product => {
    createPage({
      path: `/detalles/${product.code}`,
      component: path.resolve(`./src/pages/detalles/[code].tsx`),
      context: {
        static_product: {...product},
      },
    });
  });

};
