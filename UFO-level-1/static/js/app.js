// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through tableData and console.log each alien sighting object
tableData.forEach(function(alienSightings) {
    console.log(alienSightings);

    // Use d3 to append one table row 'tr' for each sighting
    var row = tbody.append("tr");  // appends 'tr' elements.
});