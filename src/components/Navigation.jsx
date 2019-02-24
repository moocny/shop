import React, { Component } from 'react';
import { Layout, Icon, Menu } from 'antd';
import { Link } from 'react-router-dom';

// navigation component
export class Navigation extends Component {
    // state for menu collapse status
    state = {
        collapsed: false,
    };

    // toggle menu collapsed state
    onCollapse = () =>
        this.setState({
            collapsed: !this.state.collapsed,
        });

    // update collapse menu status on resize
    updateDimensions = () => {
        if (window.innerWidth < 768) {
            this.setState({ collapsed: true });
        } else {
            this.setState({ collapsed: false });
        }
    };

    // update collapse menu status on scroll
    updateScroll = () => {
        if (window.scrollY > 200) {
            this.setState({ collapsed: true });
        } else {
            this.setState({ collapsed: false });
        }
    };

    componentDidMount() {
        // when component mounts, add resize and scroll event handlers
        window.addEventListener('resize', this.updateDimensions);
        window.addEventListener('scroll', this.updateScroll);

        // when on mobile view, show collapsed menu from beginning
        if (window.innerWidth < 768) {
            this.setState({ collapsed: true });
        }
    }

    render() {
        const cartLength = this.props.cart.length;

        return (
            <Layout.Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>

                {/* menu toggle button */}
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

                {/* menu */}
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['home']}>

                    {/* cart with cart items count */}
                    {cartLength > 0 && (
                        <Menu.Item key="cart">
                            <Link to="/cart">
                                <Icon type="shopping-cart" />
                                <span>{`Cart ${cartLength > 0 ? `(${cartLength})` : ''}`}</span>
                            </Link>
                        </Menu.Item>
                    )}

                    {/* home */}
                    <Menu.Item key="home">
                        <Link to="/">
                            <Icon type="home" />
                            <span>Home</span>
                        </Link>
                    </Menu.Item>

                    {/* categories  */}
                    <Menu.SubMenu
                        key="categories"
                        title={
                            <span>
                                <Icon type="align-left" />
                                <span>Categories</span>
                            </span>
                        }
                    >
                        {/* show each of the category as a sub menu item */}
                        {this.props.categories.map(category => (
                            <Menu.Item key={category.id}>
                                {/* link each menu category item to category url  */}
                                <Link to={`/category/${category.slug}`}>{category.name}</Link>
                            </Menu.Item>
                        ))}
                    </Menu.SubMenu>

                    {/* account  */}
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
