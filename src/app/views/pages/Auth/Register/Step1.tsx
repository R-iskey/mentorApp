import React from 'react';
import { Form, Input, Select } from 'antd';
import { EMAIL_VALIDATOR } from "../../../../constants";

const {Option} = Select;

export default function Step1() {
    return <>
        <Form.Item name="firstName" label="First Name" rules={[{required: true}]}>
            <Input/>
        </Form.Item>
        <Form.Item name="lastName" label="Last Name" rules={[{required: true}]}>
            <Input/>
        </Form.Item>
        <Form.Item name="email" label="Email"
                   rules={[{required: true}, {pattern: EMAIL_VALIDATOR, message: 'Wrong email address provided '}]}>
            <Input/>
        </Form.Item>
        <Form.Item name="country" label="Country" rules={[{required: true}]}>
            <Input/>
        </Form.Item>
        <Form.Item name="city" label="City" rules={[{required: true}]}>
            <Input/>
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{required: true}]}>
            <Select placeholder="Select a option and change input text above">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
            </Select>
        </Form.Item>
    </>;
};

