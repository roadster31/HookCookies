$(function(){
    $('#cookie-headband').each(function(){
        var $elem = $(this);

        $elem.cookieHeadband({
            // Your options
            openClass : 'in',
            closeClass : 'hide',
            closeBtn : $('#cookie-headband-close', $elem)
        });
    });
});
