import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import categories from './categories.json';

import { Home } from './Home';
import { Category } from './Category';
import { NotFound } from './NotFound';

class App extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = () =>
        this.setState({
            collapsed: !this.state.collapsed,
        });

    render() {
        return (
            <BrowserRouter>
                <Layout style={{ minHeight: '100vh' }}>
                    <Layout.Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div
                            style={{
                                height: '32px',
                                margin: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '16px',
                            }}
                        >
                            <Icon
                                style={{ color: 'white' }}
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.onCollapse}
                            />
                        </div>
                        <Menu
                            theme="dark"
                            mode="inline"
                            defaultSelectedKeys={['home', 'categories']}
                        >
                            <Menu.Item key="home">
                                <Link to="/">
                                    <Icon type="home" />
                                    <span>Home</span>
                                </Link>
                            </Menu.Item>
                            <Menu.SubMenu
                                key="categories"
                                title={
                                    <span>
                                        <Icon type="align-left" />
                                        <span>Categories</span>
                                    </span>
                                }
                            >
                                {categories.map(category => (
                                    <Menu.Item key={category.id}>
                                        <Link to={`/category/${category.slug}`}>
                                            {category.name}
                                        </Link>
                                    </Menu.Item>
                                ))}
                            </Menu.SubMenu>
                            <Menu.Item key="account">
                                <Link to="/account">
                                    <Icon type="user" />
                                    <span>Account</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="contact">
                                <Link to="/contact">
                                    <Icon type="mail" />
                                    <span>Contact</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Layout.Sider>
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

export default App;
