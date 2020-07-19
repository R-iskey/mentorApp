import React, { Component, ErrorInfo } from "react";
import { isDevelopment } from "./constants";
import { Result } from "antd";
import { Link } from "react-router-dom";

interface IState {
    error: Error;
    errorInfo: ErrorInfo
}

/**
 * Catch the children components errors
 * @see https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html
 * @see https://github.com/facebook/react/issues/11334#issuecomment-338656383
 */
class ErrorBoundary extends Component<any, IState> {
    constructor(props: Error) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        if (isDevelopment) {
            console.log(error, errorInfo);
        }
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo
        })
    }

    render() {
        if (this.state.error) {
            return (
                <Result
                    status="500"
                    title="Unexpected Error"
                    subTitle="Focus on remedies, not faults. - Jack Nicklaus"
                    extra={<Link to={'/'}>Back Home</Link>}
                />
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
