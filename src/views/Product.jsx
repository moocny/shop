import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, InputNumber } from 'antd';

export class ProductComponent extends Component {
    state = {
        quantity: 1,
    };

    changeQuantity = quantity => this.setState({ quantity });

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
                <h3 style={{ color: 'gray' }}>
                    {(product.price * this.state.quantity).toFixed(2)} zł
                </h3>
                <div style={{ margin: '24px 0' }}>
                    <InputNumber
                        placeholder="Quantity"
                        value={this.state.quantity}
                        onChange={this.changeQuantity}
                    />
                    <Button
                        onClick={() => this.props.addToCart(product.id, this.state.quantity)}
                        type="primary"
                    >
                        Add to cart
                    </Button>
                </div>
                <h3>{product.description}</h3>
            </div>
        );
    }
}

export const Product = withRouter(ProductComponent);
