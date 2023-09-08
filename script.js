// script.js
// Get the current date and time
const now = new Date();

// Array of weekday names
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Display the Slack username
document.querySelector('[data-testid="slackUserName"]').textContent = "ZhakkihNetwork";

// Display the current day of the week
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = daysOfWeek[now.getUTCDay()];

// Display the current UTC time in hh:mm AM/PM format
const hours = now.getUTCHours();
const minutes = now.getUTCMinutes();
const ampm = hours >= 12 ? "PM" : "AM";
const formattedHours = hours % 12 || 12; // Convert to 12-hour format
const formattedMinutes = minutes.toString().padStart(2, '0'); // Add leading zeros
document.querySelector('[data-testid="currentUTCTime"]').textContent = `${formattedHours}:${formattedMinutes} ${ampm}`;

// Display your track
document.querySelector('[data-testid="myTrack"]').textContent = "Frontend";

function updateDateTime() {
    const dayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const utcTime = new Date().toISOString().slice(11, 19) + " UTC";
    
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dayOfWeek;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = utcTime;
}

setInterval(updateDateTime, 1000); // Update every second