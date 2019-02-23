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
                <p>{product.description}</p>
                <p style={{ color: 'darkred', fontSize: 16 }}>${product.price}</p>
            </div>
        </Card>
    </Link>
);
