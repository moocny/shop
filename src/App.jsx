import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './Home';
import { Navigation } from './Navigation';
import { Category } from './Category';
import { NotFound } from './NotFound';

export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout style={{ minHeight: '100vh' }}>
                    <Navigation />
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
                                <Route exact path="/category/:categorySlug" component={Category} />
                                <Route exact component={NotFound} />
                            </Switch>
                        </Layout.Content>
                    </Layout>
                </Layout>
            </BrowserRouter>
        );
    }
}
