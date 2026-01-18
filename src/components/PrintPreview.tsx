import React, { useMemo } from 'react';
import { PrintPreviewProps } from '../types';
import { NameTagPage } from './NameTagPage';
import { NAME_TAGS_PER_PAGE } from '../utils/constants';
import { paginateData } from '../utils/tsvParser';

/**
 * PrintPreview component
 * Displays all pages of name tags in a preview format
 */
export const PrintPreview: React.FC<PrintPreviewProps> = ({ data }) => {
    // Paginate the data
    const pages = useMemo(
        () => paginateData(data, NAME_TAGS_PER_PAGE),
        [data]
    );

    // Don't render if no data
    if (pages.length === 0) {
        return null;
    }

    return (
        <>
            <section className="preview-section no-print">
                <div className="preview-header">
                    <h2>Print Preview</h2>
                    <span className="page-info">
                        {data.length} name tag{data.length !== 1 ? 's' : ''} • {pages.length} page
                        {pages.length !== 1 ? 's' : ''}
                    </span>
                </div>
            </section>

            <div className="print-preview">
                {pages.map((pageData, index) => (
                    <NameTagPage
                        key={index}
                        data={pageData}
                        pageNumber={index + 1}
                        totalPages={pages.length}
                    />
                ))}
            </div>
        </>
    );
};
