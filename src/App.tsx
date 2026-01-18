import { useState, useMemo, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { InputSection } from './components/InputSection';
import { PrintPreview } from './components/PrintPreview';
import { ErrorBoundary } from './components/ErrorBoundary';
import { parseTSV } from './utils/tsvParser';
import { SAMPLE_TSV } from './utils/constants';

// Local storage key for persisting user input
const STORAGE_KEY = 'nameTagPrinter_tsvInput';

/**
 * Main App component
 * Manages state and orchestrates the name tag printer application
 * with error handling, performance optimizations, and data persistence
 */
function App() {
    // Initialize state from localStorage if available
    const [tsvInput, setTsvInput] = useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved || '';
        } catch (error) {
            console.error('Failed to load saved data:', error);
            return '';
        }
    });

    // Parse TSV data with memoization for performance
    // Only re-parse when input actually changes
    const parsedData = useMemo(() => {
        return parseTSV(tsvInput);
    }, [tsvInput]);

    // Persist input to localStorage when it changes
    useEffect(() => {
        try {
            if (tsvInput) {
                localStorage.setItem(STORAGE_KEY, tsvInput);
            } else {
                localStorage.removeItem(STORAGE_KEY);
            }
        } catch (error) {
            console.error('Failed to save data:', error);
        }
    }, [tsvInput]);

    // Handle print button click
    const handlePrint = useCallback(() => {
        if (parsedData.length === 0) {
            alert('Please enter valid TSV data before printing.');
            return;
        }
        window.print();
    }, [parsedData.length]);

    // Handle load sample button click
    const handleLoadSample = useCallback(() => {
        setTsvInput(SAMPLE_TSV);
    }, []);

    // Handle clear button click
    const handleClear = useCallback(() => {
        if (tsvInput && !confirm('Are you sure you want to clear all data?')) {
            return;
        }
        setTsvInput('');
    }, [tsvInput]);

    return (
        <ErrorBoundary>
            <>
                <div className="app-container no-print">
                    <Header />
                    <InputSection
                        value={tsvInput}
                        onChange={setTsvInput}
                        onPrint={handlePrint}
                        onLoadSample={handleLoadSample}
                        onClear={handleClear}
                        printDisabled={parsedData.length === 0}
                        recordCount={parsedData.length}
                    />
                </div>

                <PrintPreview data={parsedData} />
            </>
        </ErrorBoundary>
    );
}

export default App;
