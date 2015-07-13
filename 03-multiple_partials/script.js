/**
 * This code snippet demonstrate different partials.
 *
 * The first one is a simple template which gets parameters from the main template
 * while the second one is defined with a callback which receive parameters in the callback
 */

//
// Simple partial
//
// This partial receive the following parameters from the main template when its placed in the template
//
//     {{tagName}}
//     {{class}}"
//
// ex: {> panelHeading tagName="div" class="panel-heading"}}
//
// The rest of the parameters are taken from the data passed to the template
//
Handlebars.registerPartial('panelHeading',
    '<{{tagName}} class="{{class}}">' +
    '<h3 class="panel-title">{{panelTitle}}</h3>' +
    '<sub>{{metadata.date}} - {{metadata.company}}</sub>' +
    '</{{tagName}}>');

/**
 * Partial with a callback.
 * The callback is being executed with auto binded parameters (data, context)
 *
 * @param {Object} data - the actual data passed at the given time to the template
 * @param {Object} context - the "this" passed by handlebars
 */
Handlebars.registerPartial('comment',
    function(data, context) {
        return '<div class="alert alert-warning">' +
            'Index in array: ' + context.data.index +
            ':  By ' + data.author.firstName + ' ' + data.author.lastName +
            '<br/>' +
            '<sub>' + data.comment + '</sub>' +
            '</div>';

    }
);

// The JSOn data for the template
var context = {
    panelTitle: 'Posted on',
    metadata: {
        date: "01/01/1970",
        company: "CodeWizard"
    },
    body: "I Love Handlebars",
    comments: [
        {
            author: {
                firstName: "Nir",
                lastName: "Geier"
            },
            comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
        },
        {
            author: {
                firstName: "Nir1",
                lastName: "Geier1"
            },
            comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
        },
        {
            author: {
                firstName: "Nir1",
                lastName: "Geier1"
            },
            comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
        }
    ]
};

// Read the template and process it
$.get('template.tpl.html', function(data) {
    // Build the Handlebars template
    var template = Handlebars.compile(data);

    // Set the total number of comments
    context.numberOfComments = context.comments.length;

    // Build the markup and it it to the page
    document.body.innerHTML += template(context);

}, 'html');