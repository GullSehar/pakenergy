$(document).ready(function() {
    // Enable tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Change animated text on hover
    $('.timeline-item').hover(function() {
        const performanceText = $(this).data('performance'); // Get performance data from custom data attribute
        $('#performance-info').text(performanceText).fadeIn();
    }, function() {
        $('#performance-info').fadeOut();
    });
});
