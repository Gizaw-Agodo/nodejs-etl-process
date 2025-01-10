
const express = require('express');
const fetchData = require('./utils/fetchData');
const transformData = require('./utils/transformData');
const writeToFile = require('./utils/writeToFile');
const universityRoutes = require('./routes/universityRoutes');
const scheduleRefresh = require('./schedule/refreshData');

const app = express();
const PORT = 3000;

app.use('/api/universities', universityRoutes);

// Initial ETL Process
const runETL = async () => {
    try {
        console.log('Running ETL process...');
        const rawData = await fetchData();
        const transformedData = transformData(rawData);
        await writeToFile(transformedData, 'universities.json');
    } catch (error) {
        console.error('ETL process failed:', error.message);
    }
};

runETL();

// Schedule daily refresh
scheduleRefresh(runETL);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
