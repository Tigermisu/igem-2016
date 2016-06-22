$(function() {
    $('.option.header').mouseenter(function () {
        var $this = $(this),
            $dropdown = $this.siblings('.option-dropdown');
        $('.option-dropdown').unbind('.closeEvent');
        header.openHeader($dropdown);
        $dropdown.one('mouseenter.closeEvent', function () {
            $dropdown.one('mouseleave.closeEvent', function () {
                header.toggleHeader($dropdown); 
            }); 
        });        
    })

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