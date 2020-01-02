import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser'
import sentryTestkit from 'sentry-testkit'
import ErrorBoundary from './ErrorBoundary'

const {testkit, sentryTransport} = sentryTestkit()
const DUMMY_DSN = 'https://acacaeaccacacacabcaacdacdacadaca@sentry.io/000001';

// initialize your Sentry instance with sentryTransport
Sentry.init({
    dsn: DUMMY_DSN,
    transport: sentryTransport
})

// then run any scenario that should call Sentry.catchException(...)
describe('Error Boundary', function () {
    let div;
    beforeEach(() => div = document.createElement('div'))

    afterEach(() => ReactDOM.unmountComponentAtNode(div))

    test('reports to sentry when error occur', function () {
        const MyCoolComponent = () => {
            throw new Error('bound in react error boundary')
            return 'MyCoolComponent'
        }
        ReactDOM.render(
            <ErrorBoundary sentry={Sentry}>
                <MyCoolComponent/>
            </ErrorBoundary>
            , div);
        expect(testkit.reports()).toHaveLength(1)
    })
})
