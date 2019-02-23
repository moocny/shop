import React from 'react';
import { withRouter } from 'react-router-dom';

export const ProductComponent = props => {
    const product = props.products.find(product => product.slug === props.match.params.slug);

    return <div>{product.name}</div>;
};

export const Product = withRouter(ProductComponent);
