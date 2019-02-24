import React, { Component } from 'react';

import { Table, Button } from 'antd';

const columns = removeFromCart => [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        render: price => `${price} zł`,
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
    },
    {
        dataIndex: 'id',
        width: 50,
        render: id => (
            <Button type="danger" onClick={e => removeFromCart(e, id)}>
                Remove
            </Button>
        ),
    },
];

export class Cart extends Component {
    handleClick = (e, id) => {
        e.preventDefault();

        this.props.removeFromCart(id);
    };

    render() {
        const productsInCart = this.props.cart.map(product => {
            const productData = this.props.products.find(
                productData => productData.id === product.id
            );

            return { ...product, ...productData };
        });

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
                {productsCost && <div>Total: {parseFloat(productsCost).toFixed(2)} zł</div>}
            </div>
        );
    }
}
