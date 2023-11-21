// Sample JavaScript for gymkhana web app

// Dummy data for events and results
const eventsData = [
    { name: 'Obstacle Race', winner: 'John Doe' },
    { name: 'Sack Race', winner: 'Jane Smith' },
    // Add more event data as needed
];

// Function to display events
function displayEvents() {
    const eventsList = document.getElementById('events-list');
    eventsData.forEach(event => {
        const li = document.createElement('li');
        li.textContent = `${event.name} - Winner: ${event.winner}`;
        eventsList.appendChild(li);
    });
}

// Function to display results
function displayResults() {
    const resultsList = document.getElementById('results-list');
    // Display results here using resultsData
    resultsList.textContent = 'Results will be displayed here'; // Example placeholder
}

// Call functions to display events and results
displayEvents();
displayResults();
