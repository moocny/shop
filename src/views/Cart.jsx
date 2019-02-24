import React, { Component } from 'react';

import { Table, Button } from 'antd';

// define column layout for cart table
const columns = removeFromCart => [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        // show price in fixed comma with currency
        render: price => `${parseFloat(price).toFixed(2)} zł`,
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
    },
    {
        dataIndex: 'id',
        width: 50,
        render: id => (
            // button for removing item from cart
            <Button type="danger" onClick={e => removeFromCart(e, id)}>
                Remove
            </Button>
        ),
    },
];

// cart component
export class Cart extends Component {
    handleClick = (e, id) => {
        e.preventDefault();

        this.props.removeFromCart(id);
    };

    render() {
        // get data about products in cart
        const productsInCart = this.props.cart.map(product => {
            const productData = this.props.products.find(
                productData => productData.id === product.id
            );

            return { ...product, ...productData };
        });

        // sum all of the products prices multiplied by quantity
        const productsCost =
            productsInCart.length > 0 &&
            productsInCart.map(product => product.price * product.quantity).reduce((a, b) => a + b);

        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <h1>Cart</h1>
                <Table
                    style={{ width: '100%' }}
                    columns={columns(this.handleClick)}
                    dataSource={productsInCart}
                    pagination={false}
                    locale={{ emptyText: 'Cart is empty' }}
                />
                <h3 style={{ margin: '16px 0' }}>
                    {productsCost && <div>Total: {parseFloat(productsCost).toFixed(2)} zł</div>}
                </h3>
            </div>
        );
    }
}
