import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.sentry = props.sentry
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default ErrorBoundary;
