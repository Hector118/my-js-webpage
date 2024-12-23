// Define a template using Mustache.js
var template = `
    <ul>
        {{#data}}
        <img src={{Image}} style="max-width:400px; max-height: 450px;">
        <li>PC: {{PC}}, Price: {{Price}}, Store: {{Store}}</li>
        {{/data}}
        <br>
        <br>
    </ul>
`;

// Get the 'output' div element
var output = document.getElementById('output');

// Fetch JSON data from the file
fetch('data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Render the data using the template
        var rendered = Mustache.render(template, { data: data });
        output.innerHTML = rendered;
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
