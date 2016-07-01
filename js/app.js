$(function() {
    $('#fullpage').fullpage({
        scrollBar: true,
        menu: '#slideMenu',
        onLeave: function(index, nextIndex, direction){
            if(nextIndex == 6 || nextIndex == 1) {
                $('.slide-menu').removeClass('show');
                if(nextIndex == 1) {
                    $('#upArrow').addClass('nope');
                } else {
                    $('#downArrow').addClass('nope');
                    $('#upArrow').addClass('go-down');
                }
            } else {
                $('.slide-menu').addClass('show');
                $('.control-arrows span').removeClass('nope');
                $('#upArrow').removeClass('go-down');
            }
        }
    });

    $('#upArrow').click(function() {
        $.fn.fullpage.moveSectionUp();
    });

    $('#downArrow').click(function() {
        $.fn.fullpage.moveSectionDown();
    });

    $(document).on('click', '.option.header:not(.active-menu)', function () {
        var $this = $(this),
            $dropdown = $this.siblings('.option-dropdown'),
            $parent = $this.parent();
        if(!$(this)[0].hasAttribute('href')) {
            if($(window).width() > 767) {
                if($('.active-menu').length > 0) {
                    $('.active-menu').click();
                } else {
                    var tgtLeft = $('#menuStart').offset().left - $this.offset().left;
                    $('.option-item').not($parent).addClass('traslucent');
                    $parent.css({
                        left: tgtLeft,
                        border: 'none',
                        zIndex: 100
                    });
                    $dropdown.css({
                        left: $parent.width(),
                        width: $('#optionsWrapper').width() - $parent.width()
                    })
                    $(this).addClass('active-menu');
                    $dropdown.find('.option').each(function(i, elem) {
                        setTimeout(function(){
                            $(elem).css('transform', 'translate(0)');
                        }, 60 * i);
                    });
                }
            } else {
                header.toggleHeader($dropdown);
            }
        }
    });

    $(document).on('click', '.active-menu', function(){ 
        var $this = $(this),
            $dropdown = $this.siblings('.option-dropdown'),
            $parent = $this.parent();
        $('.option-item').not($this).removeClass('traslucent');
        $this.removeClass('active-menu');
        $parent.removeAttr('style');
        $dropdown.removeAttr('style');
        $dropdown.find('.option').removeAttr('style');

    });

    $('.toggle-menu').click(function () {
        $('.main-nav').addClass('open');
        $('body').append('<div class="black-overlay"></div>');
        $('.black-overlay').one('click', function () {
            $('.main-nav').removeClass('open');
            $('.black-overlay').remove();
        });
    });
});

header = {
    toggleHeader: function ($dropdown) {
        $('.option-dropdown').not($dropdown).each(function () {
            var $otherDd = $(this);
            if($otherDd.hasClass('open')) {
                $otherDd.css('max-height', 0);
                $otherDd.removeClass('open');
            }
        });
        if($dropdown.hasClass('open')) {
            $dropdown.css('max-height', 0);
        } else {
            $dropdown.css('max-height', $dropdown.find('.option').length * 30);
        }
        $dropdown.toggleClass('open'); 
    },

    openHeader: function ($dropdown) {
        $('.option-dropdown').not($dropdown).each(function () {
            var $otherDd = $(this);
            if($otherDd.hasClass('open')) {
                $otherDd.css('max-height', 0);
                $otherDd.removeClass('open');
            }
        });
        $dropdown.css('max-height', $dropdown.find('.option').length * 30);        
        $dropdown.addClass('open'); 
    }
}