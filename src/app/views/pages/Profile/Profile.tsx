import React, { useEffect } from 'react';
import { commonOp } from "@store/common";
import { useDispatch } from "react-redux";
import ProfileInfo from './ProfileInfo';
import { ProfileGroup } from "./ProfileGroup/ProfileGroup";
import { Space } from 'antd';

export function Profile() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(commonOp.fetchCurrentUser());
    }, []);

    return <Space direction="vertical">
        <ProfileInfo/>
        <ProfileGroup/>
    </Space>
}
