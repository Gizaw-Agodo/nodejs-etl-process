const schedule = require('node-schedule');

const scheduleRefresh = (callback) => {
    schedule.scheduleJob('0 0 * * *', async () => {
        console.log('Scheduled ETL refresh triggered at midnight UTC.');
        await callback();
    });
};

module.exports = scheduleRefresh;
