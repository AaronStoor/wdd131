// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year in the footer's first paragraph
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Set the last modified date in the footer's second paragraph
document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModified;