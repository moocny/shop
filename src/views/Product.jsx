import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, InputNumber } from 'antd';

export class ProductComponent extends Component {
    render() {
        const product = this.props.products.find(
            product => product.slug === this.props.match.params.slug
        );

        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <img
                    style={{ width: '100%', maxWidth: 800 }}
                    src={product.img}
                    alt={product.name}
                />
                <h1 style={{ margin: '24px 0' }}>{product.name}</h1>
                <h3>{product.description}</h3>
                <h3>{product.price}</h3>
                <div>
                    <InputNumber placeholder="Quantity" defaultValue={1} />
                    <Button type="primary">Add to cart</Button>
                </div>
            </div>
        );
    }
}

export const Product = withRouter(ProductComponent);
