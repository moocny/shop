import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Divider } from 'antd';

export const ProductCard = ({ product }) => (
    <Link to={`/product/${product.slug}`}>
        <Card
            style={{ width: 300, margin: 10 }}
            cover={<img height={200} alt={product.name} src={product.img} />}
        >
            <div style={{ textAlign: 'center' }}>
                <strong style={{ fontSize: 18 }}>{product.name}</strong>
                <Divider />
                <h2 style={{ color: 'gray', fontSize: 16 }}>
                    {parseFloat(product.price).toFixed(2)} zł
                </h2>
                <p>{product.description}</p>
            </div>
        </Card>
    </Link>
);
