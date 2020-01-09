import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false };
        this.sentry = props.sentry
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true })
        this.sentry.captureException(error)
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary;
