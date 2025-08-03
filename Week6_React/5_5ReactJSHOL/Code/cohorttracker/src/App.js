// App.js

import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
    const cohorts = [
        { name: "React Basics", status: "ongoing", startDate: "2025-07-01", endDate: "2025-08-01" },
        { name: "Advanced JS", status: "completed", startDate: "2025-05-01", endDate: "2025-06-01" }
    ];

    return (
        <div>
            <h1>Cohort Dashboard</h1>
            {cohorts.map((c, index) => (
                <CohortDetails key={index} cohort={c} />
            ))}
        </div>
    );
}

export default App;
