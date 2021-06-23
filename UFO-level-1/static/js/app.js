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

    // Use 'Object.entries' to console.log each alien sighting value
    Object.entries(alienSightings).forEach(function([key, value]) {
        console.log(key, value);

        // Append a cell to the row for each value in the sighting object
        var cell = row.append("td");

        // Add text
        cell.text(value);
    });
});