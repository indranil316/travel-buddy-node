module.exports = {
    printWidth: 80, // The maximum line length
    tabWidth: 2, // Number of spaces per tab
    useTabs: false, // Indent lines with spaces instead of tabs
    semi: true, // Add a semicolon at the end of every statement
    singleQuote: true, // Use single quotes instead of double quotes
    trailingComma: 'es5', // Print trailing commas wherever possible in multi-line comma-separated syntactic structures
    bracketSpacing: true, // Print spaces between brackets in object literals
    arrowParens: 'always', // Include parentheses around a sole arrow function parameter
    endOfLine: 'lf', // Set the line ending style
    overrides: [
      {
        files: '*.json',
        options: {
          printWidth: 100,
        },
      },
    ],
  };
  