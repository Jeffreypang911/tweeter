$(document).ready(function() {
    
    var maxLength = 140
    var counter = $('#chars')
    
    $('textarea').keyup(function() {
        var length = $(this).val().length;
        var length = maxLength-length;
        counter.text(length);
        
        if (length < 0) {
            counter.addClass('red');
        }
        else {
            counter.removeClass('red');
        }
    });
});

