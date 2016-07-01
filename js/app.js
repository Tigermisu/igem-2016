$(function() {
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

    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if(scroll > 0) {
            $('.slide-menu').addClass('show');
        } else {
            $('.slide-menu').removeClass('show');
        }
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