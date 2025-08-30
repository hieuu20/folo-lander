import React from 'react';

interface Props {
    text: string
    className: string
    rootClassName?: string
}
export function CurveText({ text, className, rootClassName }: Props) {
    return (
        <svg width="800" height="300" viewBox="0 0 800 300" className={rootClassName}>
            <path
                id="curve"
                d="M 100 200 Q 400 50 700 200"
                fill="transparent"
                stroke="transparent"
            />
            <text fill="white" textAnchor="middle" className={className}>
                <textPath href="#curve" startOffset="50%">
                    {text}
                </textPath>
            </text>
        </svg>
    );
}
