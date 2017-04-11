$(document).ready(function(){
    $('.searchinit').click(function(){
        value = $('.search input').val();
        if (value.length > 6) {
            return;
        }
    })
});