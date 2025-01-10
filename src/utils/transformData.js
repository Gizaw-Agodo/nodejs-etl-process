const transformData = (data) => {
    return data.map(university => ({
        name: university.name || '',
        country: university.country || '',
        state_province: university['state-province'] || '',
        web_pages: university.web_pages?.[0] || '',
    }));
};

module.exports = transformData;
