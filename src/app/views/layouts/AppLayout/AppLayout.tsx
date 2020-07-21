import React from "react";
import { Layout } from "antd";
import styles from './style.module.scss';

interface IProps {
    children: JSX.Element[] | JSX.Element;
}

/**
 * AppLayout includes all pages-components and provide
 * the data which based on projectId and taskId
 * @param children
 */
export function AppLayout({children}: IProps) {
    return <Layout>
        <Layout.Content className={styles.appContentStyles}>
            {children}
        </Layout.Content>
    </Layout>;
}
