# Name Tag Printer

A modern web application for generating and printing name tags from TSV (Tab-Separated Values) data.

## Features

- **TSV Data Import**: Paste TSV data directly into the application
- **Live Preview**: See name tags before printing
- **Print-Optimized**: Generates properly formatted pages for printing (6 tags per page in 2x3 grid)
- **Sample Data**: Load sample data to test the application
- **Responsive Design**: Works on different screen sizes

## Technology Stack

- **React 18** - Modern UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **CSS3** - Styled with custom properties and print media queries

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd name-tag
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Usage

1. **Paste TSV Data**: Copy your TSV data and paste it into the text area
2. **View Preview**: The name tags will automatically appear in the preview section
3. **Print**: Click the "Print Name Tags" button to open the print dialog
4. **Load Sample**: Click "Load Sample Data" to see an example

### TSV Format

The application expects TSV data with the following columns:

| Column | Field | Description |
|--------|-------|-------------|
| A | (unused) | Row number or ID |
| B | (unused) | Additional ID field |
| C | First Name | Student's first name |
| D | Last Name | Student's last name |
| E | Grade | Grade level |
| F | Class Room | Classroom number |
| G | Homeroom | Homeroom teacher name |
| H | Activity | Activity or class name |
| I | Activity Room | Room number for the activity |

**Example TSV data:**
```
A	B	C	D	E	F	G	H	I
1		Zachary	M.	5	21	Ms. Starks	Sewing	6
2		Emma	S.	4	15	Mr. Johnson	Drawing & Painting	3
```

### Name Tag Layout

Each name tag displays:
- **Name** (large, serif font)
- **Activity** (medium font)
- **Activity Room** (with "Room #" prefix)
- **Homeroom** (with "Homeroom:" prefix)
- **Grade and Class Room** (small font)

## Project Structure

```
name-tag/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Header.tsx
│   │   ├── InputSection.tsx
│   │   ├── NameTag.tsx
│   │   ├── NameTagPage.tsx
│   │   └── PrintPreview.tsx
│   ├── styles/             # CSS files
│   │   ├── index.css       # Base styles
│   │   ├── components.css  # Component styles
│   │   └── print.css       # Print-specific styles
│   ├── types/              # TypeScript types
│   │   └── index.ts
│   ├── utils/              # Utility functions
│   │   ├── constants.ts
│   │   └── tsvParser.ts
│   ├── App.tsx             # Main app component
│   └── index.tsx           # Entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Development

### Code Quality

- **TypeScript**: All code is fully typed
- **Component Architecture**: Modular, reusable components
- **Separation of Concerns**: Clear separation of logic, styling, and presentation
- **Documentation**: Comprehensive inline documentation

### Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (includes TypeScript compilation)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run type-check` - Run TypeScript type checking without emitting files
- `npm run clean` - Clean build artifacts and cache
- `npm run validate` - Run both type checking and linting

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

MIT

## Author

Created as a refactored version of the original name-printer.html application.
