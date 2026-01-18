import React from 'react';
import { NameTagPageProps } from '../types';
import { NameTag } from './NameTag';

// Size constants for name tag dimensions (adjustable)
export const NAMETAG_WIDTH = '3.45in'; // Letter: 8.5in page width
export const NAMETAG_HEIGHT = '2.375in'; // Letter: 11in / 4 tags = 2.75in

/**
 * NameTagPage component
 * Displays a single page containing up to 8 name tags in a 2x4 grid
 */
export const NameTagPage: React.FC<NameTagPageProps> = ({
    data,
    pageNumber,
    totalPages,
}) => {
    return (
        <div className="page-wrapper">
            <div className="page-label no-print">
                Page {pageNumber} of {totalPages}
            </div>
            <div
                className="nametag-page"
                style={{
                    '--nametag-width': NAMETAG_WIDTH,
                    '--nametag-height': NAMETAG_HEIGHT,
                } as React.CSSProperties}
            >
                {Array.from({ length: 8 }).map((_, index) => (
                    <NameTag key={index} data={data[index]} />
                ))}
            </div>
        </div>
    );
};
