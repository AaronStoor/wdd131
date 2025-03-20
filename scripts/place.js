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
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}

// Static values for temperature and wind speed
const temperature = 10; // in °C
const windSpeed = 5; // in km/h

// Check if conditions are met for wind chill calculation
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = windChill + '°C';
} else {
    document.getElementById('windChill').textContent = 'N/A';
}