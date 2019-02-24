import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import categories from './categories.json';
import products from './products.json';

import { Home } from './views/Home';
import { Category } from './views/Category';
import { Product } from './views/Product';
import { NotFound } from './views/NotFound';
import { LogIn } from './views/LogIn.jsx';
import { SignUp } from './views/SignUp.jsx';

import { Navigation } from './components/Navigation';
import { PropsRoute } from './components/PropsRoute.jsx';

export class App extends Component {
    state = {
        categories,
        products,
    };

    render() {
        return (
            <BrowserRouter>
                <Layout style={{ minHeight: '100vh' }}>
                    <Navigation categories={this.state.categories} />
                    <Layout>
                        <Layout.Content
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                background: '#fff',
                            }}
                        >
                            <Switch>
                                <Route exact path="/" component={Home} />
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
