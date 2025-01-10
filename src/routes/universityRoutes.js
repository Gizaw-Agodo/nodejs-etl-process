const express = require('express');
const fs = require('fs');
const path = require('path');
const csvWriter = require('csv-writer').createObjectCsvWriter;

const router = express.Router();

router.get('/download', async (req, res) => {
    const jsonFilePath = path.join(__dirname, '../../data/universities.json');
    const csvFilePath = path.join(__dirname, '../../output/universities.csv');

    try {
        const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

        const csvWriterInstance = csvWriter({
            path: csvFilePath,
            header: [
                { id: 'name', title: 'Name' },
                { id: 'country', title: 'Country' },
                { id: 'state_province', title: 'State/Province' },
                { id: 'web_pages', title: 'Web Pages' },
            ],
        });

        await csvWriterInstance.writeRecords(jsonData);
        res.download(csvFilePath, 'universities.csv');
    } catch (error) {
        console.error('Error generating CSV:', error.message);
        res.status(500).send('Failed to generate CSV file.');
    }
});

module.exports = router;
