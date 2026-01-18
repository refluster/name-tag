import React from 'react';
import { NameTagPageProps } from '../types';
import { NameTag } from './NameTag';

/**
 * NameTagPage component
 * Displays a single page containing up to 6 name tags in a 2x3 grid
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
                {Array.from({ length: 6 }).map((_, index) => (
                    <NameTag key={index} data={data[index]} />
                ))}
            </div>
        </div>
    );
};
