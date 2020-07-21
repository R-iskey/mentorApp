import React from 'react';
import { Form, Input } from 'antd';

export default function Step2() {
    return <>
        <Form.Item name="department" label="Department" rules={[{required: true}]}>
            <Input/>
        </Form.Item>
        <Form.Item name="jobTitle" label="Job Title" rules={[{required: true}]}>
            <Input/>
        </Form.Item>
    </>;
};

