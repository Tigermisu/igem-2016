$(function() {
    header.init();
    calendar.init();
    try {
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
    } catch(e) {

    }

    try {
        window.sr = ScrollReveal();
        sr.reveal('.team-member');
        sr.reveal('.std-section h2');
    } catch(e) {

    }

    $('#upArrow').click(function() {
        $.fn.fullpage.moveSectionUp();
    });

    $('#downArrow').click(function() {
        $.fn.fullpage.moveSectionDown();
    });

    
});

header = {
    init: function() {        
        var $meta = $('#meta'),
            activePage = $meta.data('thisPage');
        $(".option-item[data-pageTitle=" + activePage + "]").addClass('active');
    
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
    },
    
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

calendar = {
    monthNames : ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ],

    init: function() {
        if($('#calendar').length > 0) {
            var currentMonth = new Date().getMonth();
            calendar.loadMonth(currentMonth);
            calendar.setEvents();
        }
    },

    loadMonth: function(monthNum) {
        var date = new Date(2016, monthNum),
            header = calendar.monthNames[date.getMonth()] + " " + date.getFullYear(),
            firstDay = date.getDay(),
            days = new Date(2016, monthNum+1, 0).getDate(),
            $calendar = $('#calendar');
        $calendar.data('currentMonth', monthNum);
        $calendar.find('.calendar-header .month-name').html(header);
        for(var i = 0, day = 1; i < 42; i++) {
             if( i >= 35 && day <= days && $('.calendar-row').length < 6) {
                 $('.calendar-days').append('<div class="calendar-row"><div class="calendar-grid"></div><div class="calendar-grid"></div><div class="calendar-grid"></div><div class="calendar-grid"></div><div class="calendar-grid"></div><div class="calendar-grid"></div><div class="calendar-grid"></div></div>');
             } else if( i < 35 && day <= days && $('.calendar-row').length > 5) {
                 $('.calendar-row').last().remove();
             }

             var $cell = $('.calendar-row').eq(Math.floor(i / 7)).find('.calendar-grid').eq(i % 7);
             if(i < firstDay || day > days) {
                 $cell.html('&nbsp;');
             } else {
                 $cell.html('<div class="day-number">' + day++ + '</div>');
             }
        }
    },

    setEvents: function() {
        $('.calendar-header .controls .glyphicon').click(function(){
            var currentMonth = parseInt($('#calendar').data('currentMonth')),
                tgtMonth = currentMonth + ($(this).index() == 0? -1:1);
            calendar.loadMonth(tgtMonth);
        });
    }
}