(function( $ ){
    $.fn.personalDataCheckBox = function( options ) {
        var settings = $.extend({
            "personalAgreementUrl":"",
            "personalAgreementLink":"",
            "personalAgreementText":"",
            "beforeSelector":'input[type="submit"]',
            "hideSubmitButton":false
        }, options);
        return this.each(function() {
            var self=this;
            var selector=$(self).find(settings.beforeSelector);
            var id='_' + Math.random().toString(36).substr(2, 9);
            var text=settings.personalAgreementLink;
            var agreementText=settings.personalAgreementText;
            var check='<div class="agreement-block"><input id="'+id+'" type="checkbox" name="agree" value="y" required class="agree"><label for="'+id+'">'+agreementText+'</label><a href="'+settings.personalAgreementUrl+'" target="_blank">'+settings.personalAgreementLink+'</a></div>';
            $(check).insertBefore(selector);
            $(selector).addClass('_no-active');
            if(settings.hideSubmitButton){
                $(selector).css('visibility','hidden');
                $(selector).attr('data-hidden',true);
            }
            var link=selector;
            link.unbind( "click" );
            link.bind('click',function(e){
                if($(this).closest('form').find(settings.beforeSelector).hasClass('_no-active')){
                    e.preventDefault();
                    $(self).find('.agreement-block').addClass('error');
                } else {
                    $(self).find('.agreement-block').removeClass('error');
                }
            });
            var checkbox=$(self).find('.agree');
            checkbox.unbind( "change" );
            checkbox.bind('change',function(e){
                e.preventDefault();
                var element=$(this).closest('form').find(settings.beforeSelector);
                var hide=!!$(element).attr('data-hidden');
                if($(this).is(':checked')){
                    $(element).removeClass('_no-active');
                    if(hide){
                        $(element).css('visibility','visible');
                    }
                } else{
                    $(element).addClass('_no-active');
                    if(hide) {
                        $(element).css('visibility', 'hidden');
                    }
                }
            });
        });
    };
})( jQuery );
