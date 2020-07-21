import { Card, Descriptions } from "antd";
import React from "react";
import { commonSel } from "@store/common";
import { useSelector } from "react-redux";

export function ProfileInfo() {
    const profileInfo = useSelector(commonSel.userProfileInfoSelector);

    return <Card title="User Info">
        <Descriptions>
            <Descriptions.Item label="Full Name">{profileInfo.first_name} {profileInfo.last_name}</Descriptions.Item>
            <Descriptions.Item label="Email">{profileInfo.email}</Descriptions.Item>
            <Descriptions.Item label="Gender">{profileInfo.gender}</Descriptions.Item>
            <Descriptions.Item label="Department">{profileInfo.department}</Descriptions.Item>
            <Descriptions.Item label="Job Title">{profileInfo.job_title}</Descriptions.Item>
            <Descriptions.Item label="Address">{profileInfo.city}, {profileInfo.country}</Descriptions.Item>
        </Descriptions>
    </Card>
}
