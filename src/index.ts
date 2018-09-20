import * as React from 'react';

export interface CustomComponentProps {
    children: React.ReactNode;
}
export interface CustomComponents {
    [componentName: string]: (props: CustomComponentProps) => React.ReactNode;
}

export default function text2vdom(
    text: string,
    customComponents: CustomComponents = {},
): React.ReactNode {
    const { parse } = require('./parser');
    return React.createElement(
        React.Fragment,
        null,
        ...parse(text, { customComponents }),
    );
}
