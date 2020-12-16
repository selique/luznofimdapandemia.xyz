$(document).ready(function(){
    $('img').load(function(){
        $('.grid').masonry({
            // options
            columnWidth: '.grid-item',
            itemSelector: '.grid-item',
            percentPosition: true
        });
    });
    $('.grid').masonry({
        // options
        columnWidth: '.grid-item',
        itemSelector: '.grid-item',
        percentPosition: true
    });
});