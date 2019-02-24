import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Tag } from 'antd';

// https://stackoverflow.com/questions/7158654/how-to-get-random-elements-from-an-array/7158691

function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0),
        i = arr.length,
        min = i - count,
        temp,
        index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

export const Home = props => {
    const randomProducts = getRandomArrayElements(props.products, 4);
    console.log(props.categories);

    return (
        <div style={{ margin: '-24px' }}>
            <Carousel autoplay>
                {randomProducts.map(product => (
                    <img src={product.img} key={product.id} alt={product} />
                ))}
            </Carousel>
            {props.categories.map(category => (
                <Link key={category.id} to={`/category/${category.slug}`}>
                    <Tag>{category.name}</Tag>
                </Link>
            ))}
        </div>
    );
};
