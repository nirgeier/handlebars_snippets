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
 * Custom helper which generate and return a html ink
 *
 * @param {String} text
 * @param {String} url
 *
 */
Handlebars.registerHelper('link',
    function(text, url) {

        // Escape the expressin fot the link in case we have spaces, special characters etc.
        text = Handlebars.Utils.escapeExpression(text);
        url = Handlebars.Utils.escapeExpression(url);

        var result = '<a href="' + url + '" target="_blank">' + text + '</a>';
        return new Handlebars.SafeString(result);
    });

var context = {
    panelTitle: 'Posted on',
    metadata: {
        date: "01/01/1970",
        company: "CodeWizard",
        link: 'http://git.ninja'
    },
    body: "I Love Handlebars",
    comments: [
        {comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"},
        {
            author: {
                firstName: "Nir1",
                lastName: "Geier1"
            },
            comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
        },
        {comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"}
    ]
};

$.get('template.tpl.html', function(data) {
    // Build the Handlebars template
    var template = Handlebars.compile(data);

    // Set the total number of comments
    context.numberOfComments = context.comments.length;

    // set the content to the main template and add it to the page
    document.body.innerHTML += template(context);

}, 'html');