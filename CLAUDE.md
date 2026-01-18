# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React + TypeScript web application for generating printable name tags from TSV (Tab-Separated Values) data. The application parses TSV input, displays live preview of name tags, and generates print-optimized pages with 6 tags per page in a 2x3 grid layout.

## Development Commands

```bash
# Start development server (opens at http://localhost:5173)
npm run dev

# Type checking without emitting files
npm run type-check

# Run ESLint
npm run lint

# Run both type checking and linting
npm run validate

# Build for production (runs tsc + vite build)
npm run build

# Preview production build locally
npm run preview

# Clean build artifacts and cache
npm run clean
```

## Architecture

### Data Flow

1. **Input** → User pastes TSV data into `InputSection` component
2. **Parsing** → `parseTSV()` utility converts TSV into `NameTagData[]` array
3. **Pagination** → `paginateData()` splits data into pages of 6 tags each
4. **Rendering** → `PrintPreview` renders `NameTagPage` components, each containing 6 `NameTag` components
5. **Printing** → CSS print media queries hide UI elements and optimize layout for physical printing

### Core Data Structure

The `NameTagData` interface (src/types/index.ts) represents a single name tag:
- `name`: Combined first and last name
- `grade`: Grade level
- `classRoom`: Regular classroom number
- `homeroom`: Homeroom teacher name
- `activity`: Activity/class name
- `activityRoom`: Room number for the activity

### TSV Column Mapping

TSV data is parsed according to column indices defined in `TSV_COLUMNS` (src/utils/constants.ts:12-20):
- Column C (index 2): First Name
- Column D (index 3): Last Name
- Column E (index 4): Grade
- Column F (index 5): Class Room
- Column G (index 6): Homeroom
- Column H (index 7): Activity
- Column I (index 8): Activity Room

Columns A and B are unused/ignored.

### Component Hierarchy

```
App (src/App.tsx)
├── Header (no-print)
├── InputSection (no-print)
│   ├── Textarea for TSV input
│   ├── Load Sample button
│   └── Print button
└── PrintPreview
    └── NameTagPage[] (one per 6 tags)
        └── NameTag[] (up to 6 per page)
```

### Styling Architecture

Three CSS files with distinct purposes:
- **index.css**: Base styles, CSS variables, container layout
- **components.css**: Component-specific styles (header, input, buttons)
- **print.css**: Print media queries using `@media print`

Print styles use `.no-print` class to hide UI elements and optimize tag layout for physical printing.

### Path Aliases

The project uses `@/*` alias for imports:
```typescript
import { NameTagData } from '@/types';
import { parseTSV } from '@/utils/tsvParser';
```

Configured in vite.config.ts:10 and tsconfig.json:26-29.

## Important Implementation Details

### Name Tag Layout

Each name tag displays (in order):
1. Name (large serif font)
2. Activity (medium font)
3. Activity Room (prefixed with "Room #")
4. Homeroom (prefixed with "Homeroom:")
5. Grade and Class Room (small font)

### Print Optimization

- Exactly 6 tags per page (2 columns × 3 rows)
- Pages use CSS Grid for consistent layout
- Empty slots are rendered as blank `NameTag` components to maintain grid structure
- All interactive UI (header, input section) hidden with `.no-print` class

### Error Handling

The TSV parser (src/utils/tsvParser.ts) includes:
- Validation for minimum columns
- Skips entries without valid names
- Console warnings for malformed data
- Graceful degradation (returns empty array on parse errors)

## TypeScript Configuration

- Strict mode enabled
- Target: ES2020
- JSX: react-jsx (new JSX transform)
- Unused locals and parameters are errors
- Path aliases enabled for cleaner imports
