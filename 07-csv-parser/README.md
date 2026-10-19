# 📚 Topic 07: CSV Parser Utility

## 🧠 Theory & Concepts

### 1. What is CSV (Comma-Separated Values)?
CSV is a simple file format used to store tabular data (numbers and text), such as a spreadsheet or database. Each line is a data record, and fields are separated by commas.

### 2. Parsing CSV in JavaScript
To convert a CSV string into an array of JavaScript objects:
1. Split the text string by newlines (`\n`) to get individual rows.
2. The first row contains the headers (column names).
3. Subsequent rows contain values. Split each row by commas (`,`) and map them to their corresponding headers.

```javascript
function parseCSV(csvString) {
    const lines = csvString.trim().split("\n");
    const headers = lines[0].split(",");
    
    return lines.slice(1).map(line => {
        const values = line.split(",");
        let obj = {};
        headers.forEach((header, index) => {
            obj[header.trim()] = values[index]?.trim();
        });
        return obj;
    });
}
```

---

## 🛠️ Exercises for Topic 07

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (CSV to Objects Converter):**
   - Write a function `csvToObjects(csvText)` that takes a CSV string with headers (e.g., `name,age,role\nAlice,25,Developer\nBob,30,Designer`) and returns an array of objects.

2. **Exercise 2 (Objects to CSV Exporter):**
   - Write the inverse function `objectsToCSV(dataArray)` that takes an array of objects and converts them back into a formatted CSV string.

3. **Exercise 3 (CSV Table Viewer UI):**
   - Create a textarea in `#ui-sandbox` preloaded with sample CSV data, a "Convert to Table" button, and render the parsed data as an HTML `<table>`.
