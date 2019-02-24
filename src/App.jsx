import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// json data
import categories from './categories.json';
import products from './products.json';

// views
import { Home } from './views/Home';
import { Category } from './views/Category';
import { Product } from './views/Product';
import { Cart } from './views/Cart';
import { LogIn } from './views/LogIn.jsx';
import { SignUp } from './views/SignUp.jsx';
import { NotFound } from './views/NotFound';

// components
import { Navigation } from './components/Navigation';
import { PropsRoute } from './components/PropsRoute.jsx';

// class for main component
export class App extends Component {
    // main app state
    state = {
        categories, // loads categories data from categories.json
        products, // loads products data from categories.json
        cart: [], // will hold products data in the cart
    };

    // adds product to card by product id and quantity
    addToCart = (productId, quantity) => {
        // check if product is already in cart
        const productInCart = this.state.cart.find(product => product.id === productId);

        if (productInCart) {
            // if yes, find it and update quantity
            const updatedCart = this.state.cart.map(product => {
                // find the product in cart array
                if (product.id === productId) {
                    // update its quantity
                    return { ...product, quantity: product.quantity + quantity };
                }

                // leave other products as they are
                return product;
            });

            // set updated cart state
            this.setState({ cart: updatedCart });
        } else {
            // if no product with id is in cart, add new

            // make new product object
            const newProduct = {
                id: productId,
                quantity,
            };

            // set state with old cart products and new product
            this.setState({ cart: [...this.state.cart, newProduct] });
        }
    };

    // remove item from cart by id
    removeFromCart = id => {
        // filter cart array elements that match id
        const updatedCart = this.state.cart.filter(product => product.id !== id);

        // set cart state with updated cart
        this.setState({ cart: updatedCart });
    };

    render() {
        return (
            <BrowserRouter>
            {/* wrap app with browser router */}
                <Layout style={{ minHeight: '100vh' }}>

                    {/* pass categories and cart to navigation */}
                    <Navigation categories={this.state.categories} cart={this.state.cart} />
                    <Layout>
                        <Layout.Content
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                background: '#fff',
                            }}
                        >

                            {/* switch shows the view based by route */}
                            <Switch>

                                {/* home */}
                                <PropsRoute
                                    exact
                                    path="/"
                                    component={Home}
                                    products={this.state.products}
                                    categories={this.state.categories}
                                />

                                {/* category */}
                                <PropsRoute
                                    exact
                                    path="/category/:slug"
                                    component={Category}
                                    categories={this.state.categories}
                                    products={this.state.products}
                                    images={this.state.images}
                                />

                                {/* product */}
                                <PropsRoute
                                    exact
                                    path="/product/:slug"
                                    component={Product}
                                    categories={this.state.categories}
                                    products={this.state.products}
                                    images={this.state.images}
                                    addToCart={this.addToCart}
                                />

                                {/* cart */}
                                <PropsRoute
                                    exact
                                    path="/cart"
                                    component={Cart}
                                    products={this.state.products}
                                    images={this.state.images}
                                    cart={this.state.cart}
                                    removeFromCart={this.removeFromCart}
                                />

                                {/* account */}
                                <Route exact path="/account" component={LogIn} />

                                {/* signup */}
                                <Route exact path="/signup" component={SignUp} />

                                {/* not found fallback */}
                                <Route exact component={NotFound} />
                                
                            </Switch>
                        </Layout.Content>
                    </Layout>
                </Layout>
            </BrowserRouter>
        );
    }
}
