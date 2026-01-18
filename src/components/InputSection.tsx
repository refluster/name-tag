import React from 'react';
import { InputSectionProps } from '../types';

/**
 * InputSection component
 * Handles TSV data input, sample data loading, clearing, and printing
 */
export const InputSection: React.FC<InputSectionProps> = ({
    value,
    onChange,
    onPrint,
    onLoadSample,
    onClear,
    printDisabled,
    recordCount = 0,
}) => {
    return (
        <section className="input-section">
            <div className="input-header">
                <label htmlFor="tsv-input">TSV Data</label>
                {recordCount > 0 && (
                    <span className="record-count">
                        {recordCount} record{recordCount !== 1 ? 's' : ''} loaded
                    </span>
                )}
            </div>
            <textarea
                id="tsv-input"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={`Paste your TSV data here...

Format: A  B  C(FirstName)  D(LastName)  E(Grade)  F(Room)  G(Homeroom)  H(Activity)  I(ActivityRoom)`}
                aria-label="TSV data input"
            />
            <div className="help-text">
                <strong>Column mapping:</strong>
                <br />
                <code>C</code> + <code>D</code> → Name &nbsp;|&nbsp;
                <code>E</code> → Grade &nbsp;|&nbsp;
                <code>F</code> → Class Room &nbsp;|&nbsp;
                <code>G</code> → Homeroom &nbsp;|&nbsp;
                <code>H</code> → Activity &nbsp;|&nbsp;
                <code>I</code> → Activity Room
            </div>
            <div className="actions">
                <button
                    className="btn btn-primary"
                    onClick={onPrint}
                    disabled={printDisabled}
                    aria-label="Print name tags"
                >
                    Print Name Tags
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={onLoadSample}
                    aria-label="Load sample data"
                >
                    Load Sample Data
                </button>
                {onClear && (
                    <button
                        className="btn btn-secondary"
                        onClick={onClear}
                        disabled={!value}
                        aria-label="Clear data"
                    >
                        Clear
                    </button>
                )}
            </div>
        </section>
    );
};

