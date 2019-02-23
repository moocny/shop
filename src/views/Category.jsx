import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const CategoryComponent = props => {
    const category = props.categories.find(category => category.slug === props.match.params.slug);
    const products = props.products.filter(product => product.category === category.id);

    return (
        <div>
            <h2>{category.name}</h2>
            <ul>
                {products.length > 0
                    ? products.map(product => (
                          <li key={product.id}>
                              <Link to={`/product/${product.slug}`}>{product.name}</Link>
                          </li>
                      ))
                    : 'No products found'}
            </ul>
        </div>
    );
};

export const Category = withRouter(CategoryComponent);
