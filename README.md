# Log to CSV Converter

## Overview

This script (`logstovaliadator.js`) converts log data from a text file (`logs.txt`) into a structured CSV file (`output.csv`). It extracts key fields such as message type, validation type, and message for easier analysis.

With this script, the manual effort of formatting logs is drastically reduced — within seconds, you’ll have a neatly formatted CSV file ready for analysis.


## Prerequisites

- **Node.js**: Ensure Node.js is installed on your system. You can download it from the [official Node.js website](https://nodejs.org/).

## How to Use

1. Copy the logs from the **`DEVELOPER-US_Validator` Jenkins job** console output.
2. Paste the copied logs into a file named `logs.txt` in the same directory as the script.
3. Open a terminal and navigate to the script's directory.
4. Run the script using Node.js:
   ```bash
   node logstovaliadator.js
