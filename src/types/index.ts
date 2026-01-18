/**
 * Represents a single person's name tag data
 */
export interface NameTagData {
    /** Full name (combination of first and last name) */
    name: string;
    /** Grade level */
    grade: string;
    /** Class room number */
    classRoom: string;
    /** Homeroom teacher name */
    homeroom: string;
    /** Activity name */
    activity: string;
    /** Activity room number */
    activityRoom: string;
}

/**
 * Props for the NameTag component
 */
export interface NameTagProps {
    /** The person's data to display, or undefined for an empty tag */
    data?: NameTagData;
}

/**
 * Props for the NameTagPage component
 */
export interface NameTagPageProps {
    /** Array of up to 6 people's data for this page */
    data: NameTagData[];
    /** Current page number (1-indexed) */
    pageNumber: number;
    /** Total number of pages */
    totalPages: number;
}

/**
 * Props for the PrintPreview component
 */
export interface PrintPreviewProps {
    /** All parsed name tag data */
    data: NameTagData[];
}

/**
 * Props for the InputSection component
 */
export interface InputSectionProps {
    /** Current TSV input value */
    value: string;
    /** Callback when TSV input changes */
    onChange: (value: string) => void;
    /** Callback when print button is clicked */
    onPrint: () => void;
    /** Callback when load sample button is clicked */
    onLoadSample: () => void;
    /** Callback when clear button is clicked */
    onClear?: () => void;
    /** Whether the print button should be disabled */
    printDisabled: boolean;
    /** Number of records in parsed data */
    recordCount?: number;
}
