import React from 'react';
import { Link } from "gatsby";

const LinkInternalExternal = ({ to, children, ...props }) => {
    const isExternal = to.startsWith('http://') || to.startsWith('https://');

    if (isExternal) {
        return (
            <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        );
    }

    return (
        <Link to={to} {...props}>
            {children}
        </Link>
    );
};

export default LinkInternalExternal;