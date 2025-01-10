# Node.js ETL Process: University Data

This project implements an **ETL (Extract, Transform, Load)** process using Node.js. It ingests university data from an external API, processes and stores it in a JSON file, and provides a CSV file download via an API endpoint.

---

## Features
- Fetches university data from the API: [Universities API](http://universities.hipolabs.com/search?country=United+States).
- Processes and transforms data to a clean format.
- Saves transformed data to a JSON file.
- Provides a REST API endpoint to download the data as a CSV file.
- Automatically refreshes the data daily at midnight (UTC).

---

## Tech Stack
- **Node.js**: Backend runtime.
- **Express.js**: Framework for building the REST API.
- **Axios**: To fetch data from external APIs.
- **CSV-Writer**: For generating CSV files.
- **Node-Schedule**: For scheduling the daily ETL process.

---

## Project Structure
```plaintext
etl-process/
├── src/
│   ├── routes/
│   │   └── universityRoutes.js        # API route for CSV download
│   ├── utils/
│   │   ├── fetchData.js               # Fetch data from API
│   │   ├── transformData.js           # Transform the data
│   │   └── writeToFile.js             # Write data to JSON file
│   ├── schedule/
│   │   └── refreshData.js             # Schedule daily data refresh
│   └── app.js                         # Main application entry point
├── data/
│   └── universities.json              # Stored university data
├── output/
│   └── universities.csv               # Generated CSV file
├── .gitignore                         # Ignored files and folders
├── README.md                          # Documentation
└── package.json                       # Node.js dependencies and scripts
```