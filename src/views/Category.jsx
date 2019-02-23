import React from 'react';
import { withRouter } from 'react-router-dom';

import { ProductCard } from '../components/ProductCard';
import { Divider } from 'antd';

const CategoryComponent = props => {
    const category = props.categories.find(category => category.slug === props.match.params.slug);
    const products = props.products.filter(product => product.category === category.id);

    return (
        <div>
            <h1>{category.name}</h1>
            <Divider />
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left',
                    flexWrap: 'wrap',
                }}
            >
                {products.length > 0
                    ? products.map(product => <ProductCard key={product.id} product={product} />)
                    : 'No products found'}
            </div>
        </div>
    );
};

export const Category = withRouter(CategoryComponent);
