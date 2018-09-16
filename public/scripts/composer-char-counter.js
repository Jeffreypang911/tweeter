$(document).ready(function() {
    
    var maxLength = 140
    var counter = $('#chars')
    
    $('#text').keyup(function() {
        var length = $(this).val().length;
        var length = maxLength-length;
        counter.text(length);
        if (length < 0) {
            counter.addClass('red');
            console.log($(this).val())
        }
    });
});

