import React from 'react';
import { withRouter } from 'react-router-dom';
import { Divider } from 'antd';

import { ProductCard } from '../components/ProductCard';

// category
const CategoryComponent = props => {
    // find category by slug from url
    const category = props.categories.find(category => category.slug === props.match.params.slug);

    // find products that are in the category by category id
    const products = props.products.filter(product => product.category === category.id);

    return (
        <div>
            <h1>{category.name}</h1>
            <Divider />
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}
            >
                {/* for each product display product card component */}
                {products.length > 0
                    ? products.map(product => <ProductCard key={product.id} product={product} />)
                    : 'No products found'}
            </div>
        </div>
    );
};

// wrap category with router so it has access to route match params
export const Category = withRouter(CategoryComponent);
