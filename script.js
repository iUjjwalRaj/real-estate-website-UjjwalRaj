// Select the form element from the HTML
const searchForm = document.getElementById('searchForm');

// Add an event listener to handle the form submission
searchForm.addEventListener('submit', function(event) {
    // Prevent the page from refreshing when the form is submitted
    event.preventDefault();
    
    // Get the value typed into the search bar
    const searchQuery = document.getElementById('searchInput').value;
    
    // Trigger a simple alert to demonstrate interactivity
    alert('Searching for properties in: ' + searchQuery + '\n(This is where the database query would run!)');
    
    // Clear the input field after searching
    document.getElementById('searchInput').value = '';
});