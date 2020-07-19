import React from "react";
import { Spin } from "antd";

interface IProps {
    tip?: string;
}

export function Loading({tip}: IProps) {
    return <Spin tip={tip}/>;
}
