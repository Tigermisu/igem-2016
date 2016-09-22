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
        sr.reveal('.std-section > h2');
        sr.reveal('.calendar');
        sr.reveal('.calendar-legend');
    } catch(e) {

    }

    $('#upArrow').click(function() {
        $.fn.fullpage.moveSectionUp();
    });

    $('#downArrow').click(function() {
        $.fn.fullpage.moveSectionDown();
    });

    
});

var header = {
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

var calendar = {
    monthNames : ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ],

    categories: {
        "Meeting": "http://igem.org/wiki/images/thumb/a/a2/T--Tec-Chihuahua--Meeting.jpg/308px-T--Tec-Chihuahua--Meeting.jpg.png",
        "Collaboration": "http://igem.org/wiki/images/thumb/3/3c/T--Tec-Chihuahua--Collaboration.jpg/320px-T--Tec-Chihuahua--Collaboration.jpg.png",
        "Project": "http://igem.org/wiki/images/thumb/2/2d/T--Tec-Chihuahua--ProjectDN.jpg/155px-T--Tec-Chihuahua--ProjectDN.jpg.png",
        "Human Practices": "http://igem.org/wiki/images/thumb/f/f2/T--Tec-Chihuahua--HP.jpg/282px-T--Tec-Chihuahua--HP.jpg.png",
        "Diffusion": "http://igem.org/wiki/images/thumb/0/0f/T--Tec-Chihuahua--Diffusion.jpg/200px-T--Tec-Chihuahua--Diffusion.jpg.png",
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
            }
        ],

        [
            //febrero
        ],

        [
            {
            Título: "ConocerTEC",
            Categoría: "Diffusion",
            Mes: "03",
            Día: "12",
            Imagen_principal: ["http://igem.org/wiki/images/thumb/4/41/12marzoa.jpg/800px-12marzoa.jpg",
                    "http://igem.org/wiki/images/b/b9/12marzob.jpg"],
            
            Texto: "We went to our school’s open house to speak about biotechnology, iGEM and our project to bachelor students",
            },

        ],

        [
            //abril
        ],

        [
            {
            Título: "Training begins!",
            Categoría: "Project",
            Mes: "05",
            Día: "23",
            Imagen_principal: ["http://igem.org/wiki/images/thumb/1/1d/23mayoa.jpg/800px-23mayoa.jpg",
                    "http://igem.org/wiki/images/thumb/b/b2/23mayob.jpg/800px-23mayob.jpg",
                    "http://igem.org/wiki/images/thumb/b/bf/23mayoc.jpg/800px-23mayoc.jpg"],
            Texto: "After we officially finished the semester and we were out on summer vacations, the whole team started doing training practices so we all knew how to do every lab procedure."

            },

            {
            Título: "Today we FINALLY decided our project!",
            Categoría: "Project",
            Mes: "05",
            Día: "26",
            Imagen_principal: ["http://igem.org/wiki/images/5/5c/26mayo.jpg"],
            Texto: "After going through a lot of project ideas and a lot of deliberation, we finally settled on the use of Myxobacterias for fungal control in alfalfa crops.",
            }

        ],
        
        [
            {
            Título: "Meeting with LATAM Ambassador Ana Sifuentes",
            Categoría: "Meeting",
            Mes: "06",
            Día: "8",
            Imagen_principal: ["http://igem.org/wiki/images/6/67/Staff_hq_ana.jpg"],
            Texto: "Today we presented our project and perspectives to the Ambassador of Latin America Ana Sifuentes. She made some suggestions and commented on our ideas to help us enhance it."
            },

            {
            Título: "Full team meeting (including other career members)",
            Categoría: "Meeting",
            Mes: "06",
            Día: "14",
            Imagen_principal: ["http://igem.org/wiki/images/thumb/7/73/14junioa.jpg/800px-14junioa.jpg", 
                    "http://igem.org/wiki/images/thumb/8/8d/14juniob.jpg/800px-14juniob.jpg"],
            Texto: "This day was the meeting with all the team members, we exposed the progress of the differents areas of the project, we settled the things to do and established the organization of the new tasks.",
            },

            {
            Título: "Gram Staining",
            Categoría: "Project",
            Mes: "06",
            Día: "14",
            Imagen_principal: ["http://igem.org/wiki/images/3/37/14junio1.jpg",
            "http://igem.org/wiki/images/7/7c/14junio2.jpg"],
            Texto: "After reviving one of the myxobacteria species that was stored frozen, (presumably Myxococcus xanthus), and cultivating it until we had decent size colonies, we proceeded to do gram staining in order to see if we indeed had the correct bacterias",
            },

            {
            Título: "Official Picture",
            Categoría: "iGEM",
            Mes: "06",
            Día: "16",
            Imagen_principal: ["http://igem.org/wiki/images/7/70/16junio.jpg"],
            Texto: "Now that the the whole team knew each other, we arranged a photoshoot in order to have group and individual photos.",
            },

            {
            Título: "Visit to cultivations: interviews to the labor union",
            Categoría: "Human Practices",
            Mes: "06",
            Día: "17",
            Imagen_principal: ["http://igem.org/wiki/images/thumb/3/33/17junioa.jpg/800px-17junioa.jpg", 
                    "http://igem.org/wiki/images/thumb/7/7c/17juniob.jpg/800px-17juniob.jpg"],
            Texto: "We established our first contact with the director of a biofertilizer company; to know what he thought of our project, see if he could contact us with some people and if he would allow us to do some sampling in the future.",
            },

            {
            Título: "Meeting the future Biotechnology students",
            Categoría: "Diffusion",
            Mes: "06",
            Día: "22",
            Imagen_principal: ["http://igem.org/wiki/images/thumb/6/61/22junio1.jpg/800px-22junio1.jpg",
            "http://igem.org/wiki/images/9/97/22junio2.jpg",
            "http://igem.org/wiki/images/4/46/22junio3.jpg"],
            Texto: "We were invited to talk about our project to the next generation of biotechnology engineering students at our University, ITESM campus Chihuahua. After this we had a little get together in which we socialized with them (and then we went to a bar and Kevin got really drunk).",
            },

            {
            Título: "Visit to cultivations: interviews",
            Categoría: "Human Practices",
            Mes: "06",
            Día: "23",
            Imagen_principal: ["http://igem.org/wiki/images/thumb/5/56/23junio1.jpg/800px-23junio1.jpg",
                    "http://igem.org/wiki/images/a/a3/23junio2.jpg"],
            Texto: "We went for the first time to visit agricultors that were experiencing problems with their crops (we were interested especially in pudrición texana). They were really eager to help us with our project and our interviews",
            },

            {
            Título: "Our kit finally arrived!",
            Categoría: "iGEM",
            Mes: "06",
            Día: "24",
            Imagen_principal: ["http://igem.org/wiki/images/thumb/9/93/24junio1.jpg/800px-24junio1.jpg",
                    "http://igem.org/wiki/images/thumb/4/49/24junio2.jpg/800px-24junio2.jpg",
                    "http://igem.org/wiki/images/thumb/f/f3/24junio3.jpg/800px-24junio3.jpg"],
            Texto: "Our advisor Cynthia informed us about our iGEM kit arrival. We are really excited!",
            },

            {
            Título: "Visit to cultivations: sampling",
            Categoría: "Project",
            Mes: "06",
            Día: "24",
            Imagen_principal: ["http://igem.org/wiki/images/thumb/e/ee/24junio4.jpg/800px-24junio4.jpg", 
                    "http://igem.org/wiki/images/thumb/2/26/24junio5.jpg/800px-24junio5.jpg",
                    "http://igem.org/wiki/images/9/96/24junio6.jpg"],
            Texto: "We went on doing sampling and had the opportunity to talk with agricultors, as well as do little interviews",
            },

            {
            Título: "Videocall with the Chennai SVCE team",
            Categoría: "Collaboration",
            Mes: "06",
            Día: "27",
            Imagen_principal: ["http://igem.org/wiki/images/thumb/0/07/27junio.jpg/800px-27junio.jpg"], 
            Texto: "We arranged a meeting via videocall with the Chennai SVCE team, where we discussed in which ways we could collaborate and work together.",
            },

            {
            Título: "Visit to cultivations: sampling",
            Categoría: "Project",
            Mes: "06",
            Día: "27",
            Imagen_principal: ["http://igem.org/wiki/images/9/90/27junio1.jpg",
                    "http://igem.org/wiki/images/thumb/b/b8/27junio2.jpg/800px-27junio2.jpg",
                    "http://igem.org/wiki/images/1/17/27junio3.jpg"],
            Texto: "We visited cultivations to do some sampling. We found that the roots were rotten, as well as a lot of cuscuta in the crop. We also asked some questions related to our project to the agricultors.",
            },

            {
            Título: "Official logo",
            Categoría: "Diffusion",
            Mes: "06",
            Día: "28",
            Imagen_principal: ["http://igem.org/wiki/images/1/11/28junio.jpg"], 
            Texto: "We finally have a logo! Thanks to Ana Yakari Carrasco Berumen for her beautiful design for our team and project"
            },

            {
            Título: "Sampling in the cut",
            Categoría: "Project",
            Mes: "06",
            Día: "29",
            Imagen_principal: ["http://igem.org/wiki/images/thumb/2/29/29junio.jpg/450px-29junio.jpg", 
            "http://igem.org/wiki/images/thumb/f/f4/29junioa.jpg/800px-29junioa.jpg"],
            Texto: "We arrived to a cultivation where Mr. Franco showed us an infected sector with white fungus. We did sampling, and found fungus in the root and stem of the alfafa. We visited another cultivations but only found one kind of infection: cuscuta. We went to the lab and prepared the material for its analysis ",
            }
        ]

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
                $("#modalSlider .carousel-inner").html('');
                $("#modalSlider .carousel-indicators").html('');
                $.each(data.Imagen_principal, function(i, v) {
                    var d = "<div class='item'><div class='slider-img' style='background-image: url(" + v + ");'></div></div>",
                        indicator = "<li data-target='#modalSlider' data-slide-to='" + i + "'></li>";
                    $("#modalSlider .carousel-inner").append(d);
                    $('#modalSlider .carousel-indicators').append(indicator);
                });
                $("#modalSlider .carousel-inner .item").first().addClass('active');
                $("#modalSlider .carousel-indicators li").first().addClass('active');
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