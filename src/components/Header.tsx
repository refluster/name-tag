import React from 'react';

/**
 * Header component displaying the application title and description
 */
export const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>Name Tag Printer</h1>
            <p>Paste TSV data to generate printable name tags</p>
        </header>
    );
};
