/**
 * Basic Handlebars demo - bind json data to template
 **/

// Load the template
$.get('template.tpl.html', function(templateMarkup) {

    // List of statuses to display on the page
    var statuses = [
        {'class': 'success', 'message': 'This is a <b>success</b> message.'},
        {'class': 'info', 'message': 'This is a <b>info</b> message.'},
        {'class': 'warning', 'message': 'This is a <b>warning</b> message.'},
        {'class': 'danger', 'message': 'This is a <b>danger</b> message.'}
    ];

    // Compile the Handlebars template
    var template = Handlebars.compile(templateMarkup);

    // pass the JSON data to the template
    document.body.innerHTML += template({statuses: statuses});

}, 'html');