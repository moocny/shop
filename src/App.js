import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

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
                            fontSize: '24px',
                        }}
                    >
                        <Icon
                            style={{ color: 'white' }}
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.onCollapse}
                        />
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['home', 'categories']}>
                        <Menu.Item key="home">
                            <Icon type="home" />
                            <span>Home</span>
                        </Menu.Item>
                        <Menu.SubMenu
                            key="categories"
                            title={
                                <span>
                                    <Icon type="align-left" />
                                    <span>Categories</span>
                                </span>
                            }
                        />
                        <Menu.Item key="account">
                            <Icon type="user" />
                            <span>Account</span>
                        </Menu.Item>
                        <Menu.Item key="contact">
                            <Icon type="mail" />
                            <span>Contact</span>
                        </Menu.Item>
                    </Menu>
                </Layout.Sider>
                <Layout>
                    <Layout.Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: '100%',
                        }}
                    >
                        Content
                    </Layout.Content>
                </Layout>
            </Layout>
        );
    }
}

export default App;
