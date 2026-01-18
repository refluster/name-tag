/**
 * Configuration constants for the name tag printer application
 */

/** Number of name tags per page (2 columns x 3 rows) */
export const NAME_TAGS_PER_PAGE = 6;

/**
 * TSV column indices for parsing
 * Based on the expected TSV format with columns A-I
 */
export const TSV_COLUMNS = {
    FIRST_NAME: 2,      // Column C
    LAST_NAME: 3,       // Column D
    GRADE: 4,           // Column E
    CLASS_ROOM: 5,      // Column F
    HOMEROOM: 6,        // Column G
    ACTIVITY: 7,        // Column H
    ACTIVITY_ROOM: 8,   // Column I
} as const;

/**
 * Sample TSV data for demonstration purposes
 */
export const SAMPLE_TSV = `A\tB\tC\tD\tE\tF\tG\tH\tI
1\t\tZachary\tM.\t5\t21\tMs. Starks\tSewing\t6
2\t\tEmma\tS.\t4\t15\tMr. Johnson\tDrawing & Painting\t3
3\t\tLiam\tW.\t3\t12\tMs. Chen\tCeramics\t8
4\t\tOlivia\tR.\t5\t21\tMs. Starks\tPhotography\t5
5\t\tNoah\tT.\t4\t18\tMrs. Davis\tWoodworking\t7
6\t\tAva\tK.\t3\t10\tMr. Wilson\tDrawing & Painting\t3
7\t\tSophia\tL.\t5\t22\tMs. Brown\tSewing\t6`;
