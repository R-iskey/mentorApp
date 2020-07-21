import React from "react";
import { Menu } from "antd";
import { routerOp } from "@store/router";
import { useDispatch, useSelector } from "react-redux";
import { commonSel } from "@store/common";

export function Navigation() {
    const dispatch = useDispatch();
    const {isAuth} = useSelector(commonSel.commonSelector);

    const handleClick = ({key}: any) => {
        dispatch(routerOp.gotoPage(key));
    };

    if (!isAuth) {
        return null;
    }

    return <Menu theme='dark' onClick={handleClick} selectedKeys={['home']} mode="horizontal">
        <Menu.Item key={'/profile'}>Profile</Menu.Item>
        <Menu.Item key={'/groups'}>Groups</Menu.Item>
    </Menu>
}

