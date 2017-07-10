(function($) {
    
    var elem;
    var params;
    
    $.fn.cookieHeadband = function(args) {
        var options = {
            openClass : 'open',
            closeClass : 'close',
            closeBtn : $('#cookie-headband-close')
        };
        
        params = $.extend(options, args);
        
        return this.each(function() {
            elem = this;
            var $closeBtn = params.closeBtn;
            
            initHeadband();
            
            $closeBtn.on('click', function(ev) {
                closeHeadband();
                ev.preventDefault();
            });
        });
    };
    
    function initHeadband() {
        if ('accepted' != $.cookie('cookieHeadband')) {
            $(elem).removeClass(params.closeClass);
            $(elem).addClass(params.openClass);
        } else {
            $(elem).removeClass(params.openClass);
            $(elem).addClass(params.closeClass);
        }
    }
    
    function closeHeadband() {
        $.cookie('cookieHeadband', 'accepted', { expires: 365 });
        
        $(elem).removeClass(params.openClass);
        $(elem).addClass(params.closeClass);
    }
})(jQuery);
