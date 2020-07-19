import React from "react";

import RouterOutlet from "./RouterOutlet";
import configureStore, { getHistory } from "./store/configureStore";
import { ConnectedRouter } from "connected-react-router";
import { Layout } from 'antd';
import configs from "./configs";
import ErrorBoundary from "./ErrorBoundary";
import { Provider } from "react-redux";
import Navigation from "./views/layouts/Navigation";

const {Header, Footer, Content} = Layout;

const store = configureStore(configs.dev);

export default function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={getHistory()}>
                <ErrorBoundary>
                    <Layout style={{minHeight: '100vh'}}>
                        <Header>
                            <Navigation/>
                        </Header>
                        <Content>
                            <RouterOutlet/>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Created in 2020, for MentorCliQ</Footer>
                    </Layout>
                </ErrorBoundary>
            </ConnectedRouter>
        </Provider>
    );
}
