import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, InputNumber } from 'antd';

// product component
export class ProductComponent extends Component {
    // state that holds quantity
    state = {
        quantity: 1,
    };

    // save quantity to state
    changeQuantity = quantity => this.setState({ quantity });

    render() {
        // find product from products data based on product slug from url
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
                        // on input number change, save quantity
                        onChange={this.changeQuantity}
                    />

                    <Button
                        // on click, call addToCart function with product id and quantity
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
