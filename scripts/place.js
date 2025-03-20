// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year in the footer's first paragraph
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Set the last modified date in the footer's second paragraph
document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModified;

// Calculate Wind Chill
function calculateWindChill(temp, windSpeed) {
    return (35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}

// Static values for temperature and wind speed
const temperature = 80; // in °F
const windSpeed = 10; // in mph

// Check if conditions are met for wind chill calculation
if (temperature <= 50 && windSpeed > 3) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = windChill + '°F';
} else {
    document.getElementById('windChill').textContent = 'N/A';
}