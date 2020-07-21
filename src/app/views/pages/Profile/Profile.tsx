import React, { useEffect } from 'react';
import { Card, Descriptions } from 'antd';
import { commonOp, commonSel } from "@store/common";
import { useDispatch, useSelector } from "react-redux";

export function Profile() {
    const dispatch = useDispatch();

    const {currentUser} = useSelector(commonSel.commonSelector);

    useEffect(() => {
        dispatch(commonOp.fetchCurrentUser());
    }, []);

    return <Card title="User Info">
        <Descriptions>
            <Descriptions.Item label="Full Name">{currentUser.first_name} {currentUser.last_name}</Descriptions.Item>
            <Descriptions.Item label="Email">{currentUser.email}</Descriptions.Item>
            <Descriptions.Item label="Gender">{currentUser.gender}</Descriptions.Item>
            <Descriptions.Item label="Department">{currentUser.department}</Descriptions.Item>
            <Descriptions.Item label="Job Title">{currentUser.job_title}</Descriptions.Item>
            <Descriptions.Item label="Address">{currentUser.city}, {currentUser.country}</Descriptions.Item>
        </Descriptions>
    </Card>
}
