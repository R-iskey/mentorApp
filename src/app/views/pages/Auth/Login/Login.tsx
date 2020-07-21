import React from 'react';
import { FormInstance } from "antd/lib/form";
import styles from './style.module.scss';
import { Button, Card, Form, Input } from "antd";
import { Link } from 'react-router-dom';
import { commonOp } from "@store/common";
import { useDispatch } from "react-redux";
import { routerOp } from "@store/router";

export function Login() {
    const formRef = React.createRef<FormInstance>();

    const dispatch = useDispatch();

    const handleLogin = async () => {
        await dispatch(commonOp.fetchLogin());
        dispatch(routerOp.gotoPage('/profile'));
    };

    return <div className={styles.loginPage}>
        <Card title={'MentorcliQ'}>
            <Form ref={formRef} name="control-ref" layout={'vertical'} scrollToFirstError={true} onFinish={handleLogin}>
                <Form.Item name="email" label="Email" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name="password" label="Password" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <Link to={'/register'}>register now!</Link>
                </Form.Item>
            </Form>
        </Card>

    </div>
}
