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

    categories: {
        "Meeting": "http://igem.org/wiki/images/thumb/d/d7/Meeting.jpg/308px-Meeting.jpg.png",
        "Collaboration": "http://igem.org/wiki/images/thumb/5/54/Collaboration.jpg/320px-Collaboration.jpg.png",
        "Project": "http://igem.org/wiki/images/thumb/1/14/ProjectDN.jpg/155px-ProjectDN.jpg.png",
        "Human Practices": "http://igem.org/wiki/images/thumb/c/ce/HP.jpg/282px-HP.jpg.png",
        "Diffusion": "http://igem.org/wiki/images/thumb/a/ac/Diffusion.jpg/200px-Diffusion.jpg.png",
        "iGEM": "http://2016.igem.org/wiki/images/3/30/T--Tec-Chihuahua--igem-small.png"

    },

    data: [
        [
            {
                Título: "First official meeting of the team",
                Categoría: "Meeting",
                Mes: "01",
                Día: "7",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/1/10/7enero.jpg/800px-7enero.jpg"],
                Texto: "Today we had our first official meeting!<br>iGEM Tec Chihuahua is integrated by 14 undergraduate students from 3rd, 5th and 7th semester of Engineering Biotechnology, and our two advisors: Cd.Ph.D. Cynthia Lorena González Trevizo and Ph.D. Silvia Lorena Montes Fonseca."
            },

            {
                Título: "Multiple images test",
                Categoría: "Human Practices",
                Mes: "01",
                Día: "7",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/1/10/7enero.jpg/800px-7enero.jpg",
                                   "http://lorempixel.com/800/720",
                                   "http://lorempixel.com/800/800"],
                Texto: "This is a thing to test multiple images on a single entry."
            }
        ],
    ],

    init: function() {
        if($('#calendar').length > 0) {
            var currentMonth = new Date().getMonth();
            calendar.loadMonth(currentMonth);
            calendar.setEvents();
        }
    },

    loadMonth: function(monthNum) {
        if(monthNum < 0 || monthNum >= 12) return false;
        var date = new Date(2016, monthNum),
            header = calendar.monthNames[date.getMonth()] + " " + date.getFullYear(),
            firstDay = date.getDay(),
            days = new Date(2016, monthNum+1, 0).getDate(),
            $calendar = $('#calendar');
        $calendar.data('currentMonth', monthNum);
        $calendar.find('.calendar-header .month-name').html(header);
        $calendar.find('#dropdownMonth').html(calendar.monthNames[date.getMonth()] + ' <span class="caret"></span>');
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
                 $cell.html('<div class="day-number" data-day="'+ day +'">' + day++ + '</div>');
             }
        }
        if(monthNum == 0) {
            $('.calendar-header .controls .glyphicon').eq(0).addClass('disabled')
        } else if (monthNum == 11) {
            $('.calendar-header .controls .glyphicon').eq(1).addClass('disabled')
        } else {
            $('.calendar-header .controls .glyphicon').removeClass('disabled')
        }
        calendar.populateMonth(monthNum);
    },

    populateMonth: function(monthNum) {
        var $grids = $('div.calendar-grid');
        $.each(calendar.data[monthNum], function(i, v) {
            var $day = $grids.find('[data-day='+v.Día+']').first().parent();
            if($day.find('.event').length == 0) $day.prepend("<div class='event'></div>");
            $day.find('.event').append("<img src='" + calendar.categories[v.Categoría] + "'/>");
            $day.find('.event img').last().data('key', monthNum + '-' + i);
        });
    },

    setEvents: function() {
        $('.calendar-header .controls .glyphicon').click(function(){
            var currentMonth = parseInt($('#calendar').data('currentMonth')),
                tgtMonth = currentMonth + ($(this).index() == 0? -1:1);
            calendar.loadMonth(tgtMonth);
        });

        $('.calendar-header .controls .dropdown ul li').click(function(){
            var tgtMonth = $(this).index();
            calendar.loadMonth(tgtMonth);
        });

        $(document).on('click', '.event img', function() {
            var key = $(this).data('key').split('-'),
                data = calendar.data[key[0]][key[1]];
            $('#eventModal .modal-title').html(data.Título);   
            $('#imageWrapper > div').addClass('hidden');
            if(data.Imagen_principal.length > 1) {
                console.log('multiple images');
                $("#modalSlider .carousel-inner").html('');
                $.each(data.Imagen_principal, function(i, v) {
                    var d = "<div class='item'><img src='" + v + "'/></div>"
                    $("#modalSlider .carousel-inner").append(d);
                });
                $("#modalSlider .carousel-inner .item").first().addClass('active');
                $("#modalSlider").carousel("pause").removeData();
                $("#modalSlider").carousel(0);
                $('#sliderWrapper').removeClass("hidden");
            } else {                
                $('#eventModal #mainImage').removeClass('hidden').html('<img class="modal-main-image" src="' + data.Imagen_principal[0] + '" />')
            }
            $('#eventModal .modal-text').html(data.Texto);        
            $('#eventModal').modal('show');
        });
    }
}