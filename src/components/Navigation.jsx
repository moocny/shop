import React, { Component } from 'react';
import { Layout, Icon, Menu } from 'antd';
import { Link } from 'react-router-dom';

export class Navigation extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = () =>
        this.setState({
            collapsed: !this.state.collapsed,
        });

    updateDimensions = () => {
        if (window.innerWidth < 768) {
            this.setState({ collapsed: true });
        } else {
            this.setState({ collapsed: false });
        }
    };

    updateScroll = () => {
        if (window.scrollY > 200) {
            this.setState({ collapsed: true });
        } else {
            this.setState({ collapsed: false });
        }
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        window.addEventListener('scroll', this.updateScroll);

        if (window.innerWidth < 768) {
            this.setState({ collapsed: true });
        }
    }

    componenWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
        window.removeEventListener('scroll', this.updateScroll);
    }

    render() {
        const cartLength = this.props.cart.length;

        return (
            <Layout.Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
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
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.onCollapse}
                    />
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['home']}>
                    {cartLength > 0 && (
                        <Menu.Item key="cart">
                            <Link to="/cart">
                                <Icon type="shopping-cart" />
                                <span>{`Cart ${cartLength > 0 ? `(${cartLength})` : ''}`}</span>
                            </Link>
                        </Menu.Item>
                    )}

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
                        {this.props.categories.map(category => (
                            <Menu.Item key={category.id}>
                                <Link to={`/category/${category.slug}`}>{category.name}</Link>
                            </Menu.Item>
                        ))}
                    </Menu.SubMenu>
                    <Menu.Item key="account">
                        <Link to="/account">
                            <Icon type="user" />
                            <span>Account</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
        );
    }
}
