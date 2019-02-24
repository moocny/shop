import React from 'react';
import { Route } from 'react-router-dom';

// this component was found on stackoverflow
// it's used to pass props to route components
// https://github.com/ReactTraining/react-router/issues/4105

const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return React.createElement(component, finalProps);
};

export const PropsRoute = ({ component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={routeProps => {
                return renderMergedProps(component, routeProps, rest);
            }}
        />
    );
};
