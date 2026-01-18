import { NameTagData } from '../types';
import { TSV_COLUMNS } from './constants';

/**
 * Parses TSV (Tab-Separated Values) data into structured name tag data
 * 
 * @param tsvInput - Raw TSV string input
 * @returns Array of NameTagData objects
 * 
 * @example
 * ```ts
 * const tsv = "A\tB\tC\tD\tE\tF\tG\tH\tI\n1\t\tJohn\tDoe\t5\t21\tMs. Smith\tArt\t3";
 * const data = parseTSV(tsv);
 * // Returns: [{ name: "John Doe", grade: "5", ... }]
 * ```
 */
export function parseTSV(tsvInput: string): NameTagData[] {
    try {
        // Return empty array if input is empty or invalid
        if (!tsvInput || typeof tsvInput !== 'string' || !tsvInput.trim()) {
            return [];
        }

        // Split into lines and filter out completely empty lines
        const lines = tsvInput
            .trim()
            .split('\n')
            .filter((line) => line.trim().length > 0);

        // Need at least header + 1 data row
        if (lines.length < 2) {
            console.warn('TSV data must contain at least a header row and one data row');
            return [];
        }

        // Skip the header row (first line)
        const dataLines = lines.slice(1);

        // Parse each data line with validation
        const parsedData = dataLines
            .map((line, index) => {
                try {
                    const cols = line.split('\t');

                    // Validate minimum required columns
                    if (cols.length < Math.max(...Object.values(TSV_COLUMNS)) + 1) {
                        console.warn(`Line ${index + 2}: Insufficient columns (expected at least ${Math.max(...Object.values(TSV_COLUMNS)) + 1}, got ${cols.length})`);
                    }

                    // Extract and sanitize first name and last name from columns C and D
                    const firstName = (cols[TSV_COLUMNS.FIRST_NAME] || '').trim();
                    const lastName = (cols[TSV_COLUMNS.LAST_NAME] || '').trim();
                    const name = `${firstName} ${lastName}`.trim();

                    // Skip entries without a valid name
                    if (!name) {
                        return null;
                    }

                    // Extract and sanitize other fields from their respective columns
                    const grade = (cols[TSV_COLUMNS.GRADE] || '').trim();
                    const classRoom = (cols[TSV_COLUMNS.CLASS_ROOM] || '').trim();
                    const homeroom = (cols[TSV_COLUMNS.HOMEROOM] || '').trim();
                    const activity = (cols[TSV_COLUMNS.ACTIVITY] || '').trim();
                    const activityRoom = (cols[TSV_COLUMNS.ACTIVITY_ROOM] || '').trim();

                    return {
                        name,
                        grade,
                        classRoom,
                        homeroom,
                        activity,
                        activityRoom,
                    };
                } catch (error) {
                    console.error(`Error parsing line ${index + 2}:`, error);
                    return null;
                }
            })
            // Filter out null entries (invalid rows)
            .filter((item): item is NameTagData => item !== null);

        if (parsedData.length === 0) {
            console.warn('No valid name tag data found in TSV input');
        }

        return parsedData;
    } catch (error) {
        console.error('Error parsing TSV data:', error);
        return [];
    }
}

/**
 * Splits an array of name tag data into pages
 * 
 * @param data - Array of NameTagData objects
 * @param itemsPerPage - Number of items per page (default: 6)
 * @returns Array of arrays, where each sub-array represents one page
 * 
 * @example
 * ```ts
 * const data = [...]; // 10 items
 * const pages = paginateData(data, 6);
 * // Returns: [[items 0-5], [items 6-9]]
 * ```
 */
export function paginateData(
    data: NameTagData[],
    itemsPerPage: number = 6
): NameTagData[][] {
    const pages: NameTagData[][] = [];

    for (let i = 0; i < data.length; i += itemsPerPage) {
        pages.push(data.slice(i, i + itemsPerPage));
    }

    return pages;
}
