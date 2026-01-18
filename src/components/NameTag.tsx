import React from 'react';
import { NameTagProps } from '../types';

/**
 * Individual name tag component
 * Displays a person's information on a single name tag
 */
export const NameTag: React.FC<NameTagProps> = ({ data }) => {
    // Render empty name tag if no data provided
    if (!data) {
        return <div className="nametag empty-nametag" />;
    }

    return (
        <div className="nametag">
            <div className="nametag-name">{data.name}</div>
            <div className="nametag-activity">{data.activity}</div>
            <div className="nametag-room">Room #{data.activityRoom}</div>
            <div className="nametag-homeroom">Homeroom: {data.homeroom}</div>
            <div className="nametag-grade-room">
                Grade: {data.grade}  Room #{data.classRoom}
            </div>
        </div>
    );
};
