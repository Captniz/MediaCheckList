import React from "react";
import "../styles/CircularProgress.css";

const CircularProgressBar = ({ progress,cssClass } : {progress: number;cssClass:String}) => {
    const radius = 40; // Fixed radius (handled in CSS)
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <svg className="circular-progress" viewBox="0 0 100 100">
            {/* Background Circle */}
            <circle className={cssClass+ " progress-bg"} cx="50" cy="50" r={radius} />
            {/* Progress Circle */}
            <circle
                className={cssClass+ " progress-bar"}
                cx="50"
                cy="50"
                r={radius}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
            />
        </svg>
    );
};

export default CircularProgressBar;
