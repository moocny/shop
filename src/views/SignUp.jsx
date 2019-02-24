import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Checkbox, Button } from 'antd';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 11 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

class SignUpForm extends React.Component {
    state = {
        agreed: false,
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleCheckboxChange = () => this.setState({ agreed: !this.state.agreed });

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <h1>Sign Up</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item {...formItemLayout} label="E-mail">
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid e-mail',
                                },
                                {
                                    required: true,
                                    message: 'Please input your e-mail',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Password">
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password',
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                            ],
                        })(<Input type="password" />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Confirm Password">
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please confirm your password',
                                },
                                {
                                    validator: this.compareToFirstPassword,
                                },
                            ],
                        })(<Input type="password" />)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        {getFieldDecorator('agreement')(
                            <Checkbox onChange={this.handleCheckboxChange}>
                                I have read <Link to="/signup">rules</Link>
                            </Checkbox>
                        )}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" disabled={!this.state.agreed}>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export const SignUp = Form.create()(SignUpForm);
