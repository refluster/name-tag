import React from 'react';
import { NameTagPageProps } from '../types';
import { NameTag } from './NameTag';

// Size constants for name tag dimensions (adjustable)
export const NAMETAG_WIDTH = '3.25in'; // Half of 8.5in page width
export const NAMETAG_HEIGHT = '1.375in'; // 11in / 8 tags = 1.375in

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
            <div className="nametag-page">
                {Array.from({ length: 8 }).map((_, index) => (
                    <NameTag key={index} data={data[index]} />
                ))}
            </div>
        </div>
    );
};
