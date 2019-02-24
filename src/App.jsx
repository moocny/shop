import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import categories from './categories.json';
import products from './products.json';

import { Home } from './views/Home';
import { Category } from './views/Category';
import { Product } from './views/Product';
import { Cart } from './views/Cart';
import { LogIn } from './views/LogIn.jsx';
import { SignUp } from './views/SignUp.jsx';
import { NotFound } from './views/NotFound';

import { Navigation } from './components/Navigation';
import { PropsRoute } from './components/PropsRoute.jsx';

export class App extends Component {
    state = {
        categories,
        products,
        cart: [],
    };

    addToCart = (id, quantity) => {
        const productInCart = this.state.cart.find(product => product.id === id);

        if (productInCart) {
            const updatedCart = this.state.cart.map(product => {
                if (product.id === id) {
                    return { ...product, quantity: product.quantity + quantity };
                }

                return product;
            });

            this.setState({ cart: updatedCart });
        } else {
            const newProduct = {
                id,
                quantity,
            };

            this.setState({ cart: [...this.state.cart, newProduct] });
        }
    };

    removeFromCart = id =>
        this.setState({ cart: this.state.cart.filter(product => product.id !== id) });

    render() {
        return (
            <BrowserRouter>
                <Layout style={{ minHeight: '100vh' }}>
                    <Navigation categories={this.state.categories} cart={this.state.cart} />
                    <Layout>
                        <Layout.Content
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                background: '#fff',
                            }}
                        >
                            <Switch>
                                <PropsRoute
                                    exact
                                    path="/"
                                    component={Home}
                                    products={this.state.products}
                                    categories={this.state.categories}
                                />
                                <PropsRoute
                                    exact
                                    path="/category/:slug"
                                    component={Category}
                                    categories={this.state.categories}
                                    products={this.state.products}
                                    images={this.state.images}
                                />
                                <PropsRoute
                                    exact
                                    path="/product/:slug"
                                    component={Product}
                                    categories={this.state.categories}
                                    products={this.state.products}
                                    images={this.state.images}
                                    addToCart={this.addToCart}
                                />
                                <PropsRoute
                                    exact
                                    path="/cart"
                                    component={Cart}
                                    products={this.state.products}
                                    images={this.state.images}
                                    cart={this.state.cart}
                                    removeFromCart={this.removeFromCart}
                                />
                                <Route exact path="/account" component={LogIn} />
                                <Route exact path="/signup" component={SignUp} />
                                <Route exact component={NotFound} />
                            </Switch>
                        </Layout.Content>
                    </Layout>
                </Layout>
            </BrowserRouter>
        );
    }
}
