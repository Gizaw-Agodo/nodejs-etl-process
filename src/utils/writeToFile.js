const fs = require('fs');
const path = require('path');

const writeToFile = async (data, filePath) => {
    try {
        const jsonPath = path.join(__dirname, '../../data/', filePath);
        fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
        console.log('Data saved to file:', jsonPath);
    } catch (error) {
        console.error('Error writing to file:', error.message);
        throw error;
    }
};

module.exports = writeToFile;
