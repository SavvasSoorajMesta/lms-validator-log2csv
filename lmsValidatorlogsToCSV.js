const fs = require('fs');

function convertLogsToCSV(inputFilePath, outputFilePath) {
  // Read logs from the input file
  const logs = fs.readFileSync(inputFilePath, 'utf8');

  // Split logs into individual lines
  const logLines = logs.split('\n');

  // Initialize an array to store CSV rows
  const csvRows = ['message type,validation type,message'];

  // Process each log line
  logLines.forEach((line) => {
    // Match the log format using a regular expression
    const match = line.match(/(\bWARN\b|\bERROR\b|\bINFO\b)\s+\[main\]\s+([\w.]+)\s+-\s+(.*)/);

    if (match) {
      const messageType = match[1]; // WARN, ERROR, INFO
      const validationType = match[2]; // Validation type (e.g., math.MathLoHierarchyValidation)
      const message = match[3]; // The actual message

      // Add the formatted row to the CSV rows
      csvRows.push(`${messageType},${validationType},"${message}"`);
    }
  });

  // Write the CSV rows to the output file
  fs.writeFileSync(outputFilePath, csvRows.join('\n'), 'utf8');
  console.log(`CSV file created at: ${outputFilePath}`);
}

// Example usage
const inputFilePath = 'logs.txt'; // Path to the input text file containing logs
const outputFilePath = 'output.csv'; // Path to the output CSV file

convertLogsToCSV(inputFilePath, outputFilePath);
