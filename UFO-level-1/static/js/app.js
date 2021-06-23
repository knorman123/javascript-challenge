// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through tableData and console.log each alien sighting object
tableData.forEach((alienSightings) => {
    // console.log(alienSightings);

    // Use d3 to append one table row 'tr' for each sighting
    var row = tbody.append("tr");  // appends 'tr' elements.

    // Use 'Object.entries' to console.log each alien sighting value
    Object.entries(alienSightings).forEach(([key, value]) => {
        console.log(key, value);

        // Append a cell to the row for each value in the sighting object
        var cell = row.append("td");

        // Add text
        cell.text(value);
    });
});

// Get reference to the Filter Table button
var button = d3.select(".btn-default");

// Use d3 '.on' to attach a click handler for the filter table
button.on("click", function() {
    // Prevent page from refreshing
    d3.event.preventDefault();
    // Remove any data
    tbody.html("");


    // Select the input element and get the raw html node
    var inputElement = d3.select(".form-control");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Clear table from previous query
    tbody.selectAll("tr").remove();
    // console.log(inputValue)
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData)
    // Use loop to append filtered data to table
    filteredData.forEach((date) => {
        var row = tbody.append("tr");
        Object.entries(date).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});