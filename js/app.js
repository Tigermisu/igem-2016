var slideTimeout;

$(function() {
    header.init();
    calendar.init();
    parallax.init();
    try {
        $('#fullpage').fullpage({
            scrollBar: true,
            menu: '#slideMenu',
            onLeave: function(index, nextIndex, direction) {
                if (nextIndex == $('#fullpage .section').length || nextIndex == 1) {
                    $('.slide-menu').removeClass('show');
                    if (nextIndex == 1) {
                        $('#upArrow').addClass('nope');
                    } else {
                        $('#downArrow').addClass('nope');
                        $('#upArrow').addClass('go-down');
                    }
                } else {
                    $('.slide-menu').addClass('show');
                    $('.slide-menu li').animate({
                        opacity: 1
                    }, 400);
                    $('.control-arrows span').removeClass('nope');
                    $('#upArrow').removeClass('go-down');
                    clearTimeout(slideTimeout);
                    slideTimeout = setTimeout(function() {
                        $('.slide-menu li').animate({
                            opacity: 0
                        }, 1200);
                        $('.slide-menu').one("mouseenter", function() {
                            $('.slide-menu li').animate({
                                opacity: 1
                            }, 400);
                        });
                    }, 4000);
                }
            }
        });
    } catch (e) {

    }

    try {
        window.sr = ScrollReveal();
        sr.reveal('.std-section h2');
        sr.reveal('.calendar');
        sr.reveal('.calendar-legend');
        if($('.calendar').length == 0) {
            sr.reveal('.team-member');
            sr.reveal('.std-section div img');         
            sr.reveal('.std-section > p');
            sr.reveal('.std-section > div p');
            sr.reveal('.std-section > img');  
            sr.reveal('.std-section li');
            sr.reveal('.std-section table');
        }
        
    } catch (e) {

    }

    $('#upArrow').click(function() {
        $.fn.fullpage.moveSectionUp();
    });

    $('#downArrow').click(function() {
        $.fn.fullpage.moveSectionDown();
    });

    $('pre > *').unwrap();

    $('#bodyContent > p').remove();

    $('#HQ_page').attr('id', 'HQ_page-tec');


    $('#getDocument').submit(function(e) {
        e.preventDefault();
        var postData = {
            email: $('#email').val(),
            name: $('#name').val(),
            country: $('#country').val(),
            language: $('#language').val()
        }
        $.ajax({
            url: "http://igem.jaquez.mx/download",
            method: "post",
            data: postData,
            complete: function(r) {
                var url = "";
                $('#popupBlocked').removeClass("hidden");
                if (language == "english") url = "http://2016.igem.org/wiki/images/4/49/T--Tec-Chihuahua--document-full-english.pdf";
                else url = "http://2016.igem.org/wiki/images/b/b8/T--Tec-Chihuahua--document-full-spanish.pdf";
                $('#popupBlocked a').attr('href', url);
                window.open(url, '_blank');
            }
        });
    });

    console.log('ready');

});

$(window).load(function(){
    console.log('load');
    setTimeout(function(){
        $('#loadingScreen').addClass('bye');
        setTimeout(function(){
            $('#loadingScreen').remove();
        }, 510)
    }, 1000);

});

var header = {
    init: function() {
        var $meta = $('#meta'),
            activePage = $meta.data('thisPage');
        $(".option-item[data-pageTitle=" + activePage + "]").addClass('active');

        $(document).on('click', '.option.header:not(.active-menu)', function() {
            var $this = $(this),
                $dropdown = $this.siblings('.option-dropdown'),
                $parent = $this.parent();
            if (!$(this)[0].hasAttribute('href')) {
                if ($(window).width() > 767) {
                    if ($('.active-menu').length > 0) {
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
                            setTimeout(function() {
                                $(elem).css('transform', 'translate(0)');
                            }, 60 * i);
                        });
                    }
                } else {
                    header.toggleHeader($dropdown);
                }
            }
        });

        $(document).on('click', '.active-menu', function() {
            var $this = $(this),
                $dropdown = $this.siblings('.option-dropdown'),
                $parent = $this.parent();
            $('.option-item').not($this).removeClass('traslucent');
            $this.removeClass('active-menu');
            $parent.removeAttr('style');
            $dropdown.removeAttr('style');
            $dropdown.find('.option').removeAttr('style');

        });

        $('.toggle-menu').click(function() {
            $('.main-nav').addClass('open');
            if ($('#globalWrapper').length > 0) {
                $('#HQ_page-tec').append('<div class="black-overlay"></div>');
            } else {
                $('body').append('<div class="black-overlay"></div>');
            }
            $('.black-overlay').one('click', function() {
                $('.main-nav').removeClass('open');
                $('.black-overlay').remove();
            });
        });
    },

    toggleHeader: function($dropdown) {
        $('.option-dropdown').not($dropdown).each(function() {
            var $otherDd = $(this);
            if ($otherDd.hasClass('open')) {
                $otherDd.css('max-height', 0);
                $otherDd.removeClass('open');
            }
        });
        if ($dropdown.hasClass('open')) {
            $dropdown.css('max-height', 0);
        } else {
            $dropdown.css('max-height', $dropdown.find('.option').length * 36);
        }
        $dropdown.toggleClass('open');
    },

    openHeader: function($dropdown) {
        $('.option-dropdown').not($dropdown).each(function() {
            var $otherDd = $(this);
            if ($otherDd.hasClass('open')) {
                $otherDd.css('max-height', 0);
                $otherDd.removeClass('open');
            }
        });
        $dropdown.css('max-height', $dropdown.find('.option').length * 30);
        $dropdown.addClass('open');
    }
}

var calendar = {
    monthNames: ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ],

    categories: {
        "Meeting": "http://igem.org/wiki/images/thumb/a/a2/T--Tec-Chihuahua--Meeting.jpg/308px-T--Tec-Chihuahua--Meeting.jpg.png",
        "Collaboration": "http://igem.org/wiki/images/thumb/3/3c/T--Tec-Chihuahua--Collaboration.jpg/320px-T--Tec-Chihuahua--Collaboration.jpg.png",
        "Project": "http://igem.org/wiki/images/thumb/2/2d/T--Tec-Chihuahua--ProjectDN.jpg/155px-T--Tec-Chihuahua--ProjectDN.jpg.png",
        "Human Practices": "http://igem.org/wiki/images/thumb/f/f2/T--Tec-Chihuahua--HP.jpg/282px-T--Tec-Chihuahua--HP.jpg.png",
        "Diffusion": "http://igem.org/wiki/images/thumb/0/0f/T--Tec-Chihuahua--Diffusion.jpg/200px-T--Tec-Chihuahua--Diffusion.jpg.png",
        "iGEM": "http://2016.igem.org/wiki/images/3/30/T--Tec-Chihuahua--igem-small.png",
        "Sensor": "http://igem.org/wiki/images/thumb/5/51/T--Tec-Chihuahua--Sensor.jpg/395px-T--Tec-Chihuahua--Sensor.jpg.png"

    },

    data: [
        // enero
        [{
            Título: "First official meeting of the team",
            Categoría: "Meeting",
            Mes: "01",
            Día: "7",
            Imagen_principal: ["http://igem.org/wiki/images/thumb/1/10/7enero.jpg/800px-7enero.jpg"],
            Texto: "Today we had our first official meeting!<br>iGEM Tec Chihuahua is integrated by 14 undergraduate students from 3rd, 5th and 7th semester of Engineering Biotechnology, and our two advisors: Cd.Ph.D. Cynthia Lorena González Trevizo and Ph.D. Silvia Lorena Montes Fonseca."
        }],

        //febrero
        [

        ],

        // marzo
        [{
                Título: "ConocerTEC",
                Categoría: "Diffusion",
                Mes: "03",
                Día: "12",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/4/41/12marzoa.jpg/800px-12marzoa.jpg",
                    "http://igem.org/wiki/images/b/b9/12marzob.jpg"
                ],

                Texto: "We went to our school’s open house to speak about biotechnology, iGEM and our project to bachelor students",
            },

        ],

        //abril
        [

        ],

        //mayo
        [{
                Título: "Training begins!",
                Categoría: "Project",
                Mes: "05",
                Día: "23",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/1/1d/23mayoa.jpg/800px-23mayoa.jpg",
                    "http://igem.org/wiki/images/thumb/b/b2/23mayob.jpg/800px-23mayob.jpg",
                    "http://igem.org/wiki/images/thumb/b/bf/23mayoc.jpg/800px-23mayoc.jpg"
                ],
                Texto: "After we officially finished the semester and we were out on summer vacations, the whole team started doing training practices so we all knew how to do every lab procedure."

            },

            {
                Título: "Today we FINALLY decided our project!",
                Categoría: "Project",
                Mes: "05",
                Día: "26",
                Imagen_principal: ["http://igem.org/wiki/images/5/5c/26mayo.jpg"],
                Texto: "After going through a lot of project ideas and a lot of deliberation, we finally settled on the use of Myxobacterias for fungal control in alfalfa crops.",
            },

            {
                Text: "- Preparation of LB and nutrient medium <br>- Preparation of TE Buffer<br>- Inoculation in broth and plate of DH5- E. coli",
                Mes: "05",
                Día: "23",
            },

            {
                Text: "- Total DNA extraction (Bollet method) of DH5- E. coli",
                Mes: "05",
                Día: "24",
            },

            {
                Text: "- Agarose gel electrophoresis (1.5X)",
                Mes: "05",
                Día: "25",
            },

            {
                Text: "- Agarose gel electrophoresis (1.5X) again",
                Mes: "05",
                Día: "26",
            },


            {
                Text: "- Repetition of Total DNA extraction of DH5-alpha E. coli  and agarose gel electrophoresis (1.5X)<br>Preparation of TAE 1X and 50X for future protocols ",
                Mes: "05",
                Día: "27",
            },

            {
                Text: "- Stock of Ampicillin (25mg/mL)<br>- Inoculation of transformed cells in LB broth ",
                Mes: "05",
                Día: "30",
            },

            {
                Text: "- Second inoculation of transformed cells in LB + Ampicillin broth",
                Mes: "05",
                Día: "31",
            },

        ],

        //junio
        [{
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
                    "http://igem.org/wiki/images/thumb/8/8d/14juniob.jpg/800px-14juniob.jpg"
                ],
                Texto: "This day was the meeting with all the team members, we exposed the progress of the differents areas of the project, we settled the things to do and established the organization of the new tasks.",
            },

            {
                Título: "Gram Staining",
                Categoría: "Project",
                Mes: "06",
                Día: "14",
                Imagen_principal: ["http://igem.org/wiki/images/3/37/14junio1.jpg",
                    "http://igem.org/wiki/images/7/7c/14junio2.jpg"
                ],
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
                    "http://igem.org/wiki/images/thumb/7/7c/17juniob.jpg/800px-17juniob.jpg"
                ],
                Texto: "We established our first contact with the director of a biofertilizer company; to know what he thought of our project, see if he could contact us with some people and if he would allow us to do some sampling in the future.",
            },

            {
                Título: "Meeting the future Biotechnology students",
                Categoría: "Diffusion",
                Mes: "06",
                Día: "22",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/6/61/22junio1.jpg/800px-22junio1.jpg",
                    "http://igem.org/wiki/images/9/97/22junio2.jpg",
                    "http://igem.org/wiki/images/4/46/22junio3.jpg"
                ],
                Texto: "We were invited to talk about our project to the next generation of biotechnology engineering students at our University, ITESM campus Chihuahua. After this we had a little get together in which we socialized with them (and then we went to a bar and Kevin got really drunk).",
            },

            {
                Título: "Visit to cultivations: interviews",
                Categoría: "Human Practices",
                Mes: "06",
                Día: "23",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/5/56/23junio1.jpg/800px-23junio1.jpg",
                    "http://igem.org/wiki/images/a/a3/23junio2.jpg"
                ],
                Texto: "We went for the first time to visit agricultors that were experiencing problems with their crops (we were interested especially in pudrición texana). They were really eager to help us with our project and our interviews",
            },

            {
                Título: "Our kit finally arrived!",
                Categoría: "iGEM",
                Mes: "06",
                Día: "24",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/9/93/24junio1.jpg/800px-24junio1.jpg",
                    "http://igem.org/wiki/images/thumb/4/49/24junio2.jpg/800px-24junio2.jpg",
                    "http://igem.org/wiki/images/thumb/f/f3/24junio3.jpg/800px-24junio3.jpg"
                ],
                Texto: "Our advisor Cynthia informed us about our iGEM kit arrival. We are really excited!",
            },

            {
                Título: "Visit to cultivations: sampling",
                Categoría: "Project",
                Mes: "06",
                Día: "24",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/e/ee/24junio4.jpg/800px-24junio4.jpg",
                    "http://igem.org/wiki/images/thumb/2/26/24junio5.jpg/800px-24junio5.jpg",
                    "http://igem.org/wiki/images/9/96/24junio6.jpg"
                ],
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
                    "http://igem.org/wiki/images/1/17/27junio3.jpg"
                ],
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
                Text: "- Transformation of OneShot Mach 1TM competent cells",
                Mes: "06",
                Día: "1",
            },

            {
                Text: "- Seeding of transformed cells in LB + Ampicillin (50mg/mL) broth",
                Mes: "06",
                Día: "2",
            },

            {
                Text: "- Plasmid DNA extraction",
                Mes: "06",
                Día: "3",
            },

            {
                Text: "- Transformation of competent cells (OneShot Mach 1TM) with pUC19",
                Mes: "06",
                Día: "7",
            },

            {
                Text: "- X-GAL preparation<br>- Repetition of Transformation of competent cells ",
                Mes: "06",
                Día: "8",
            },

            {
                Text: "- Repetition of Enzymatic digestion",
                Mes: "06",
                Día: "16",
            },

            {
                Text: "- Seeding of transformed cells in LB + Ampicillin broth",
                Mes: "06",
                Día: "9",
            },

            {
                Text: "- Plasmid DNA extraction PureLink Quick Plasmid Miniprep Kit<br>- Agarose gel electrophoresis (1.5X)",
                Mes: "06",
                Día: "10",
            },

            {
                Text: "- Enzymatic digestión with BioBrick Assembly Kit of New England<br>- Agarose gel electrophoresis (2X)",
                Mes: "06",
                Día: "14",
            },

            {
                Text: "- PCR of HPV Template DNA<br> -Agarose gel electrophoresis(1 X)",
                Mes: "06",
                Día: "20",
            },

            {
                Text: "- Repetition of PCR HPV Template DNA<br>- Agarose gel electrophoresis (1x)",
                Mes: "06",
                Día: "21",
            },

            {
                Text: "- Preparation of TOPO Mix (TOPO TA Cloning Kit) with HPV PCR product<br>- Transformation of OneShot cells with TOPO vector",
                Mes: "06",
                Día: "23",
            },

            {
                Text: "- Field sampling and inoculation of crop fungi on PDA agar",
                Mes: "06",
                Día: "24",
            },

            {
                Text: "- Field sampling in Rosales city and inoculation of crop fungi on PDA agar ",
                Mes: "06",
                Día: "29",
            },

            {
                Título: "Sampling in the cut",
                Categoría: "Project",
                Mes: "06",
                Día: "29",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/2/29/29junio.jpg/450px-29junio.jpg",
                    "http://igem.org/wiki/images/thumb/f/f4/29junioa.jpg/800px-29junioa.jpg"
                ],
                Texto: "We arrived to a cultivation where Mr. Franco showed us an infected sector with white fungus. We did sampling, and found fungus in the root and stem of the alfafa. We visited another cultivations but only found one kind of infection: cuscuta. We went to the lab and prepared the material for its analysis ",
            }
        ],

        //julio

        [

            {
                Título: "First Photoresistor test",
                Categoría: "Sensor",
                Mes: "07",
                Día: "6",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/2/28/T--Tec-Chihuahua--S07.6.jpg/798px-T--Tec-Chihuahua--S07.6.jpg", "http://igem.org/wiki/images/thumb/a/a9/T--Tec-Chihuahua--S07.6b.jpg/798px-T--Tec-Chihuahua--S07.6b.jpg"],
                Texto: "After developing the concept of a device that could scan the surface of a petri dish, in which all the experiments were to be carried out, a prototype was to be built. <br> Tests were carried out in order to test the feasibility of using the photoresistors as effective sensors. The light source was later changed to a red LED to fit better the sensitivity of the photo resistor."
            },

            {
                Título: "Arrangement of testing",
                Categoría: "Sensor",
                Mes: "07",
                Día: "20",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/9/92/T--Tec-Chihuahua--S07.20.jpg/798px-T--Tec-Chihuahua--S07.20.jpg"],
                Texto: "This arrangement was used to test each of the photoresistors. The BH1750 light sensor is shown close to the photoresistor. Each photoresistor had to be calibrated with the sensor. In order to do this, the value of the each of the resistors at the same level of light was registered. After this, an LED was lit so that it would fall over the photoresistor. After three changes in light, its values were registered and compared to the values given by the BH1750 light sensor. With this,a direct relation was established between the determined value of a photoresistor and its correspondent value in lux, given by the BH1750 light sensor. With every value established, a given hysteresis might be applied by tweaking the code. "
            },

            {
                Título: "Arrangement of the sensors",
                Categoría: "Sensor",
                Mes: "07",
                Día: "29",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/6/6d/T--Tec-Chihuahua--S07.29.jpg/798px-T--Tec-Chihuahua--S07.29.jpg"],
                Texto: "The proposed arrangement for the sensors is a line of photosensors aligned so that they form an X axis. This line of sensor is to be moved by a mechanism following a Y axis. WIth this, the entire surface is covered.The multiplexers are devices that allow to switch between two or more signals using a single wire. They are used because there are 11 photoresistors and there is only six channels to read them. By using a multiplexer, up to four photoresistor signals can use one channel using a single wire. Multiplexers are also shown in the picture with the arrangement of the sensors."
            },

            {
                Text: "- Preparation of Ampicillin Stock (25mg/mL)<br>- Growth of OneShot MachTM cells on LB broth<br>- Inoculation of Rhizoctonia solani on PDA agar<br>- Macro and microanalysis of previously inoculated fungi",
                Mes: "07",
                Día: "5",
            },

            {
                Título: "We learned to electropore!",
                Categoría: "Project",
                Mes: "07",
                Día: "13",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/2/27/13julio.jpg/800px-13julio.jpg"],
                Texto: "Today the Professor Salvador Eguiarte came to the lab to teach us how to electropore. We learnt how to handle the equipment and cleared up questions about the protocol we’ll use"
            },


            {
                Título: "About our Project and About our Lab delivery",
                Categoría: "iGEM",
                Mes: "07",
                Día: "15",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/c/c0/T--Tec-Chihuahua--Lab2.jpg/450px-T--Tec-Chihuahua--Lab2.jpg", "http://igem.org/wiki/images/thumb/2/2f/T--Tec-Chihuahua--Lab3.jpg/800px-T--Tec-Chihuahua--Lab3.jpg", "http://igem.org/wiki/images/thumb/7/79/T--Tec-Chihuahua--Lab4.jpg/800px-T--Tec-Chihuahua--Lab4.jpg", "http://igem.org/wiki/images/thumb/6/6c/T--Tec-Chihuahua--Lab5.jpg/800px-T--Tec-Chihuahua--Lab5.jpg", "http://igem.org/wiki/images/thumb/7/7d/T--Tec-Chihuahua--Lab6.jpg/800px-T--Tec-Chihuahua--Lab6.jpg", "http://igem.org/wiki/images/thumb/6/6c/T--Tec-Chihuahua--Lab8.jpg/800px-T--Tec-Chihuahua--Lab8.jpg", "http://igem.org/wiki/images/thumb/f/f5/T--Tec-Chihuahua--Lab9.jpg/800px-T--Tec-Chihuahua--Lab9.jpg"],
                Texto: "We completed and delivered the reports requested by iGEM concerning our lab and our project. Workspace and biosafety are really important!"
            },

            {
                Text: "- Reseeding of fungi on PDA agar",
                Mes: "07",
                Día: "18",
            },

            {
                Text: "- Bacterial quantifying<br>- Myxobacteria purification",
                Mes: "07",
                Día: "19",
            },

            {
                Text: "- Inoculation of Myxobacteria on nutrient broth",
                Mes: "07",
                Día: "20",
            },

            {
                Título: "Bacterial quantification",
                Categoría: "Project",
                Mes: "07",
                Día: "21",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/7/76/T--Tec-Chihuahua--21julio.jpg/800px-T--Tec-Chihuahua--21julio.jpg"],
                Texto: "We stayed awake until 1 o’clock taking care of the optical density of our baby bacterias. Lab work never ends!",
            },

            {
                Text: "- Chloramphenicol finally arrived!",
                Mes: "07",
                Día: "23",
            },

            {
                Título: "Field trip: Cuauhtémoc!",
                Categoría: "Human Practices",
                Mes: "07",
                Día: "25",
                Texto: "Some members of the team visited the Credit Union from Cuauhtémoc Agricultors to make some interviews, as well as visit some other small businesses",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/5/53/25julio1.jpg/800px-25julio1.jpg", "http://igem.org/wiki/images/thumb/b/b0/T--Tec-Chihuahua--25julio2.jpg/800px-T--Tec-Chihuahua--25julio2.jpg", "http://igem.org/wiki/images/thumb/4/42/T--Tec-Chihuahua--25julio3.jpg/709px-T--Tec-Chihuahua--25julio3.jpg", "http://igem.org/wiki/images/thumb/5/50/T--Tec-Chihuahua--25julio4.jpg/774px-T--Tec-Chihuahua--25julio4.jpg"]
            },

            {
                Text: "- Preparation of Chloramphenicol Stock (35mg/mL)<br>- Preparation of Medium with Chloramphenicol ",
                Mes: "07",
                Día: "25",
            },

            {
                Text: "- Growth of OneShot Mach™1 cells<br>- Preparation of Ampicillin Stock (25mg/mL)<br>- Preparation of Medium with Ampicillin",
                Mes: "07",
                Día: "26",
            },

            {
                Título: "iGEM Match Registry",
                Categoría: "Collaboration",
                Mes: "07",
                Día: "26",
                Imagen_principal: ["http://igem.org/wiki/images/7/7c/IGEMMatch.jpg"],
                Texto: "Today we registered on the iGEM Match Platform, created by the UC Davis Team. It helped us search for new collaborations among the iGEM teams "
            },

            {
                Text: "- Competent cells Test (iGEM)",
                Mes: "07",
                Día: "27",
            },

            {
                Text: "- Competent cells test by pUC19 transformation",
                Mes: "07",
                Día: "28",
            },

            {
                Text: "- Competent cells protocol<br>- Transformation of competent cells<br>- Electrocompetent cells protocol",
                Mes: "07",
                Día: "29",
            },

            {
                Título: "Photoshoot and purification of fungus culture",
                Categoría: "Project",
                Mes: "07",
                Día: "18",
                Imagen_principal: ["http://igem.org/wiki/images/e/e2/T--Tec-Chihuahua--Hongo1.jpg", "http://igem.org/wiki/images/f/f7/T--Tec-Chihuahua--Hongo2.jpg", "http://igem.org/wiki/images/e/e5/T--Tec-Chihuahua--Hongo3.jpg", "http://igem.org/wiki/images/a/ae/T--Tec-Chihuahua--Hongo4.jpg", "http://igem.org/wiki/images/0/06/T--Tec-Chihuahua--Hongo5.jpg", "http://igem.org/wiki/images/7/73/T--Tec-Chihuahua--Hongo6.jpg", "http://igem.org/wiki/images/a/a4/T--Tec-Chihuahua--Hongo7.jpg",
                    "http://igem.org/wiki/images/d/db/T--Tec-Chihuahua--Hongo8.jpg",
                    "http://igem.org/wiki/images/4/49/T--Tec-Chihuahua--Hongo9.jpg",
                    "http://igem.org/wiki/images/b/b0/T--Tec-Chihuahua--Hongo10.jpg"
                ],
                Texto: "The purification we did today consisted on inoculation on solid PDA media by piercing with a straight inoculation loop",
                containSlider: true
            },

            {
                Título: "Fungus characterization",
                Categoría: "Project",
                Mes: "07",
                Día: "20",
                Imagen_principal: ["http://igem.org/wiki/images/0/06/T--Tec-Chihuahua--20julioa.jpg", "http://igem.org/wiki/images/e/e1/T--Tec-Chihuahua--20juliob.jpg"],
                Texto: "Rhizopus oryzae is one of the most common fungus that lives in dead organic matter and it’s isolated from plant and soil material. We could characterize this fungus thanks to its macro and microscopic characteristics that we observed:<br><br>Macroscopic:<br>Color: brownish-black and yellowish base<br>Texture: wooly<br>Bottom view: yellowish<br>Elevation: medium (sporangiophore)<br><br>Microscopic:<br>Stolon: (serial hyphae)<br>Sporangiophores<br>Brownish sporangium.",
            },

            {
                Título: "Confrontations fungus-bacteria",
                Categoría: "Project",
                Mes: "07",
                Día: "21",
                Imagen_principal: ["http://parts.igem.org/wiki/images/f/f6/T--Tec-Chihuahua--Enf1.jpg",
                    "http://igem.org/wiki/images/c/c9/T--Tec-Chihuahua--Enf2.jpg",
                    "http://parts.igem.org/wiki/images/d/d7/T--Tec-Chihuahua--Enf3.jpg",
                    "http://igem.org/wiki/images/8/80/T--Tec-Chihuahua--Enf4.jpg",
                    "http://parts.igem.org/wiki/images/8/89/T--Tec-Chihuahua--Enf5.jpg",
                    "http://igem.org/wiki/images/5/5f/T--Tec-Chihuahua--Enf6.jpg",
                    "http://parts.igem.org/wiki/images/a/a9/T--Tec-Chihuahua--Enf7.jpg",
                    "http://igem.org/wiki/images/d/d3/T--Tec-Chihuahua--Enf8.jpg",
                    "http://parts.igem.org/wiki/images/9/9e/T--Tec-Chihuahua--Enf9.jpg",
                    "http://igem.org/wiki/images/b/b9/T--Tec-Chihuahua--Enf10.jpg",
                    "http://parts.igem.org/wiki/images/c/cf/T--Tec-Chihuahua--Enf11.jpg",
                    "http://igem.org/wiki/images/9/90/T--Tec-Chihuahua--Enf12.jpg"
                ],
                containSlider: true,
                Texto: "We photoshooted the fungi and Myxobacteria confrontations in different time periods (24 hours and one week), but in the same conditions (incubated at 37 ºC)."
            },




        ],

        //agosto

        [



            {
                Título: "India conference via Google Hangouts",
                Categoría: "Collaboration",
                Mes: "08",
                Día: "1",
                Texto: "Today we spoke once again with the SVCE Chennai Team to collaborate and share our advances",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/8/85/T--Tec-Chihuahua--1agosto.jpg/800px-T--Tec-Chihuahua--1agosto.jpg"]
            },

            {
                Text: "- Resuspension of BioBricks to be used on the Project<br>- Transformation with OneShot Mach™  cells",
                Mes: "08",
                Día: "2",
            },

            {
                Text: "- Preparation of Chloramphenicol stock (35mg/mL)<br>- Fungi reseeding on PDA agar and lactophenol cotton blue staining for microscopic observation",
                Mes: "08",
                Día: "3",
            },

            {
                Título: "Guanajuato Meet-up: Biología Sintética en México",
                Categoría: "Collaboration",
                Mes: "08",
                Día: "5",
                Texto: "We had the opportunity to attend the Meet-up  “Biología Sintética en México” organized by the Guanajuato Mx team.We presented our project and were able to listen to the projects of other Mexico teams, such as Pumas Mexico, Tec - CEM and Tec - Monterrey. We also got to know  the city by visiting some representative tourist places.",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/8/81/T--Tec-Chihuahua--5agosto1.jpg/800px-T--Tec-Chihuahua--5agosto1.jpg", "http://igem.org/wiki/images/thumb/c/c9/T--Tec-Chihuahua--5agosto2.jpg/800px-T--Tec-Chihuahua--5agosto2.jpg", "http://igem.org/wiki/images/thumb/c/c6/T--Tec-Chihuahua--5agosto3.jpg/800px-T--Tec-Chihuahua--5agosto3.jpg", "http://igem.org/wiki/images/c/c7/T--Tec-Chihuahua--5agosto4.jpg"]
            },

            {
                Text: "- Transformation of BioBrick 8 of the project",
                Mes: "08",
                Día: "9",
            },

            {
                Text: "- Competent cells protocol",
                Mes: "08",
                Día: "12",
            },

            {
                Text: "- Plasmid DNA extraction",
                Mes: "08",
                Día: "16",
            },

            {
                Text: "- 3A Assembly (1)",
                Mes: "08",
                Día: "18",
            },

            {
                Título: "General Meeting with Drs.",
                Categoría: "Meeting",
                Mes: "08",
                Día: "18",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/3/39/19agosto.jpg/800px-19agosto.jpg"],
                Texto: "We had a meeting to report our advances so far with our main advisors",
            },

            {
                Título: "Switzerland EPFL Conference via Skype",
                Categoría: "Collaboration",
                Mes: "08",
                Día: "18",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/a/a8/T--Tec-Chihuahua--18agosto.jpg/800px-T--Tec-Chihuahua--18agosto.jpg"],
                Texto: "",
            },

            {
                Text: "- Repetition of 3A Assembly",
                Mes: "08",
                Día: "19",
            },

            {
                Título: "Westminster conference via Skype",
                Categoría: "Collaboration",
                Mes: "08",
                Día: "19",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/f/f6/Lala.jpg/450px-Lala.jpg"],
                Texto: "",
            },



            {
                Text: "- Competent cells protocol<br>- Transformation using assembles",
                Mes: "08",
                Día: "22",
            },

            {
                Text: "- Reseeding of Transformed assembled cells ",
                Mes: "08",
                Día: "23",
            },

            {
                Título: "Welcoming the new generation of Biotechnology students",
                Categoría: "Diffusion",
                Mes: "08",
                Día: "24",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/4/45/T--Tec-Chihuahua--24agosto.jpg/800px-T--Tec-Chihuahua--24agosto.jpg"],
                Texto: "The iGEM team had the honor of delivering lab coats to some of the new biotechnology students. Welcome to this new generation of Biotechnologists!"
            },

            {
                Título: "Interlab attempt",
                Categoría: "iGEM",
                Mes: "08",
                Día: "24",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/1/1a/T--Tec-Chihuahua--24agostoa.jpg/450px-T--Tec-Chihuahua--24agostoa.jpg"],
                Texto: "We begun to work on the Interlab by transforming with the kit sent by iGEM. Unfortunately, we couldn’t succesfully carry out the experiment, it appears the pack with the DNA wasn’t properly sealed when sent :("
            },

            {
                Text: "- 3A Assembly",
                Mes: "08",
                Día: "29",
            },

            {
                Text: "- Agarose gel electrophoresis",
                Mes: "08",
                Día: "30",
            },

        ],

        //September

        [{
                Text: "- 3A Assembly<br>- Competent cells protocol<br>- Transformation of First 3A",
                Mes: "09",
                Día: "1",
            },

            {
                Título: "Burger Day",
                Categoría: "Diffusion",
                Mes: "09",
                Día: "3",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/7/74/T--Tec-Chihuahua--3sept1.jpg/800px-T--Tec-Chihuahua--3sept1.jpg", "http://igem.org/wiki/images/thumb/6/6f/T--Tec-Chihuahua--3sept2.jpg/800px-T--Tec-Chihuahua--3sept2.jpg", "http://igem.org/wiki/images/thumb/9/99/T--Tec-Chihuahua--3sept3.jpg/800px-T--Tec-Chihuahua--3sept3.jpg", "http://igem.org/wiki/images/thumb/1/1b/T--Tec-Chihuahua--3sept4.jpg/800px-T--Tec-Chihuahua--3sept4.jpg", "http://igem.org/wiki/images/thumb/1/17/T--Tec-Chihuahua--3sept5.jpg/450px-T--Tec-Chihuahua--3sept5.jpg", "http://igem.org/wiki/images/6/6e/T--Tec-Chihuahua--3sept6.jpg"],
                Texto: "We set-up a burger day in order to raise some funds. Long and tiring day, but fun… Hey, put some more charcoal on the grill, we are not finished!",
            },


            {
                Text: "- Competent cells protocol",
                Mes: "09",
                Día: "5",
            },

            {
                Título: "Arrival of competent cells",
                Categoría: "Project",
                Mes: "09",
                Día: "8",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/9/96/T--Tec-Chihuahua--8septiembre.jpg/800px-T--Tec-Chihuahua--8septiembre.jpg"],
                Texto: "We have new material to work with! And also some dry ice to play with… (note Armando’s face of fun and satisfaction)",
            },

            {
                Text: "- Agarose gel electrophoresis",
                Mes: "09",
                Día: "8",
            },

            {
                Text: "- Clones Selection",
                Mes: "09",
                Día: "9",
            },

            {
                Text: "- Preparation of LB + Chloramphenicol Agar",
                Mes: "09",
                Día: "13",
            },

            {
                Text: "- Preparation of LB + Ampicillin Agar<br>- Preparation of MiniPrep solutions<br>- Transformation of competent cells",
                Mes: "09",
                Día: "14",
            },

            {
                Text: "- Competent cells protocol<br>- Transformation of competent cells",
                Mes: "09",
                Día: "16",
            },

            {
                Text: "- Reseeding of transformed cells to LB broth",
                Mes: "09",
                Día: "17",
            },

            {
                Text: "- Competent cells protocol<br>- DNA Plasmid extraction by Alkaline lysis<br>- Plasmid quantification on NanoDrop2000<br>- Resuspension of bricks<br>- Transformation of competent cells",
                Mes: "09",
                Día: "18",
            },

            {
                Text: "- Agarose gel electrophoresis",
                Mes: "09",
                Día: "20",
            },

            {
                Text: "- DNA Plasmid extraction by Alkaline lysis",
                Mes: "09",
                Día: "23",
            },

            {
                Text: "- Preparation of Kanamycin stock (25mg/mL)<br>- Preparation of Chloramphenicol stock",
                Mes: "09",
                Día: "24",
            },

            {
                Text: "- Reseeding of transformed cells",
                Mes: "09",
                Día: "25",
            },

            {
                Text: "- DNA Plasmid extraction",
                Mes: "09",
                Día: "26",
            },

            {
                Text: "- Competent cells protocol",
                Mes: "09",
                Día: "27",
            },

            {
                Text: "- Transformation of competent cells ",
                Mes: "09",
                Día: "28",
            },

            {
                Text: "- Reseeding of transformed cells on LB broth ",
                Mes: "09",
                Día: "29",
            },

            {
                Text: "- Competent cells protocol<br>- Transformation of competent cells<br>- DNA plasmid extraction",
                Mes: "09",
                Día: "30",
            },

        ],

        // october
        [{
                Text: "Clones selection <br> Reseeding transformed Cells to LB broth <br> Gram staining (verification)",
                Mes: "10",
                Día: "15",
            },

            {
                Text: "Myxobacteria culture<br> Plasmid extraction <br> Ligation to Cm backbone",
                Mes: "10",
                Día: "16",
            },

            {
                Text: "CTT Media <br> Myxobacteria electroporation",
                Mes: "10",
                Día: "17",
            },

            {
                Título: "Incorporation to the Arduino",
                Categoría: "Sensor",
                Mes: "10",
                Día: "14",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/f/f5/T--Tec-Chihuahua--S10.14.jpg/798px-T--Tec-Chihuahua--S10.14.jpg"],
                Texto: "The sensor was incorporated to the Arduino (the hardware of the sensor) and wires were labeled for their easy identification."
            },

            {
                Título: "Sensor assembly",
                Categoría: "Sensor",
                Mes: "10",
                Día: "10",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/1/14/T--Tec-Chihuahua--S10.10.jpg/798px-T--Tec-Chihuahua--S10.10.jpg", "http://igem.org/wiki/images/thumb/a/a5/T--Tec-Chihuahua--S10.10b.jpg/798px-T--Tec-Chihuahua--S10.10b.jpg", "http://igem.org/wiki/images/thumb/9/92/T--Tec-Chihuahua--S10.10c.jpg/798px-T--Tec-Chihuahua--S10.10c.jpg"],
                Texto: "The components were ready to be soldered to the perfboard. In the images, the sensors were The bases for the multiplexers and the photoresistors were soldered. All the wiring was incorporated as well."
            },

            {
                Título: "DVD drive alligning",
                Categoría: "Sensor",
                Mes: "10",
                Día: "16",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/c/c4/T--Tec-Chihuahua--S10.16.jpg/798px-T--Tec-Chihuahua--S10.16.jpg"],
                Texto: "The photoresistors were aligned under the DVD drive. The red LEDs as light sources are also shown."
            },

            {
                Título: "DVD Drive Disassembling 1",
                Categoría: "Sensor",
                Mes: "10",
                Día: "3",
                containSlider: true,
                Texto: "Some parts of the DVD Drive were removed to mount the new components. Slide to see a step-by-step explanation ",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/d/d6/T--Tec-Chihuahua--Sensor1.jpg/756px-T--Tec-Chihuahua--Sensor1.jpg",
                    "http://igem.org/wiki/images/thumb/6/66/T--Tec-Chihuahua--Sensor2.jpg/757px-T--Tec-Chihuahua--Sensor2.jpg",
                    "http://igem.org/wiki/images/thumb/4/42/T--Tec-Chihuahua--Sensor3.jpg/722px-T--Tec-Chihuahua--Sensor3.jpg",
                    "http://igem.org/wiki/images/thumb/8/8f/T--Tec-Chihuahua--Sensor4.jpg/752px-T--Tec-Chihuahua--Sensor4.jpg",
                    "http://igem.org/wiki/images/thumb/8/84/T--Tec-Chihuahua--Sensor5.jpg/755px-T--Tec-Chihuahua--Sensor5.jpg",
                    "http://igem.org/wiki/images/thumb/b/b4/T--Tec-Chihuahua--Sensor6.jpg/761px-T--Tec-Chihuahua--Sensor6.jpg",
                    "http://igem.org/wiki/images/thumb/2/22/T--Tec-Chihuahua--Sensor7.jpg/757px-T--Tec-Chihuahua--Sensor7.jpg",
                    "http://igem.org/wiki/images/thumb/0/05/T--Tec-Chihuahua--Sensor8.jpg/755px-T--Tec-Chihuahua--Sensor8.jpg",
                    "http://igem.org/wiki/images/thumb/8/85/T--Tec-Chihuahua--Sensor9.jpg/757px-T--Tec-Chihuahua--Sensor9.jpg"
                ]
            },

            {
                Text: "- Team video planning<br>- Reseeding of transformed cells",
                Mes: "10",
                Día: "1",
            },

            {
                Text: "Plasmid extraction <br> 3A Assembly",
                Mes: "10",
                Día: "4",
            },

            {
                Text: "Intermediates extraction",
                Mes: "10",
                Día: "8",
            },


            {
                Título: "Banner ready",
                Mes: "10",
                Categoría: "iGEM",
                Día: "6",
                Texto: "We sent our banner for the Giant Jamboree. Thanks to Antonio Alejandro Flores Quintanilla and Daniel Estrada Ortega for their help in this beautiful design!",
                Imagen_principal: ["http://igem.org/wiki/images/3/36/T--Tec-Chihuahua--Banner.jpg"],
            },


            {
                Título: "Introduction video shooting",
                Categoría: "Diffusion",
                Mes: "10",
                Día: "9",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/c/cf/T--Tec-Chihuahua--vid.jpg/800px-T--Tec-Chihuahua--vid.jpg"],
                Texto: "The guys from Productora 206 came to the lab to shoot the first part of our introduction video. It was tiring but we had a lot of fun. CUT!!",
            },

            {
                Título: "Judging form delivery",
                Categoría: "iGEM",
                Mes: "10",
                Día: "14",
                Texto: "Intense work to deliver the Judging form on time! The team got together to sort out some final details",
                Imagen_principal: ["http://igem.org/wiki/images/4/4d/T--Tec-Chihuahua--14oct.jpg"]
            },

            {
                Título: "Official Difussion Event",
                Categoría: "Diffusion",
                Mes: "10",
                Día: "18",
                Texto: "In front of an audience of students, teachers, parents, administrators and members of the TEC community we carried out our event to present the project, pamphlet and the final text of Human Practices for this edition of iGEM. For almost two hours the team interacted with the audience explaining and answering questions that came up. Likewise we took the opportunity to hand over the official t-shirts that will identify our team in the Giant Jamboree. The presentation was given by some team members that will not be with us in Boston and also we used this opportunity to increase the general interest about the importance of Synthetic Biology to solve actual problems. #RoadToBoston",
                Imagen_principal: ["http://igem.org/wiki/images/thumb/a/a2/T--Tec-Chihuahua--Cafeconciencia.jpg/409px-T--Tec-Chihuahua--Cafeconciencia.jpg.png",
                    "http://igem.org/wiki/images/thumb/6/62/T--Tec-Chihuahua--10.18.jpg/800px-T--Tec-Chihuahua--10.18.jpg",
                    "http://igem.org/wiki/images/thumb/f/fc/T--Tec-Chihuahua--10.18b.jpg/800px-T--Tec-Chihuahua--10.18b.jpg",
                    "http://igem.org/wiki/images/thumb/7/73/T--Tec-Chihuahua--10.18c.jpg/800px-T--Tec-Chihuahua--10.18c.jpg",
                    "http://igem.org/wiki/images/thumb/1/1e/T--Tec-Chihuahua--10.18d.jpg/800px-T--Tec-Chihuahua--10.18d.jpg",
                    "http://igem.org/wiki/images/thumb/5/52/T--Tec-Chihuahua--10.18e.jpg/800px-T--Tec-Chihuahua--10.18e.jpg"
                ]
            }

        ]

    ],

    init: function() {
        if ($('#calendar').length > 0) {
            var currentMonth = new Date().getMonth();
            calendar.loadMonth(currentMonth);
            calendar.setEvents();
        }
    },

    loadMonth: function(monthNum, animate) {
        if (monthNum < 0 || monthNum >= 12) return false;
        var date = new Date(2016, monthNum),
            header = calendar.monthNames[date.getMonth()] + " " + date.getFullYear(),
            firstDay = date.getDay(),
            days = new Date(2016, monthNum + 1, 0).getDate(),
            $calendar = $('#calendar'),
            prevHtml = $calendar.find('.calendar-days').html(),
            prevNum = parseInt($calendar.data('currentMonth'));
        $calendar.data('currentMonth', monthNum);
        $calendar.find('.calendar-header .month-name').html(header);
        $calendar.find('#dropdownMonth').html(calendar.monthNames[date.getMonth()] + ' <span class="caret"></span>');
        for (var i = 0, day = 1; i < 42; i++) {
            if (i >= 35 && day <= days && $('.calendar-row').length < 6) {
                $('.calendar-days').append('<div class="calendar-row"><div class="calendar-grid"></div><div class="calendar-grid"></div><div class="calendar-grid"></div><div class="calendar-grid"></div><div class="calendar-grid"></div><div class="calendar-grid"></div><div class="calendar-grid"></div></div>');
            } else if (i < 35 && day <= days && $('.calendar-row').length > 5) {
                $('.calendar-row').last().remove();
            }

            var $cell = $('.calendar-row').eq(Math.floor(i / 7)).find('.calendar-grid').eq(i % 7);
            if (i < firstDay || day > days) {
                $cell.html('&nbsp;');
            } else {
                $cell.html('<div class="day-number" data-day="' + day + '">' + day++ + '</div>');
            }
        }
        if (monthNum == 0) {
            $('.calendar-header .controls .glyphicon').eq(0).addClass('disabled')
        } else if (monthNum == 11) {
            $('.calendar-header .controls .glyphicon').eq(1).addClass('disabled')
        } else {
            $('.calendar-header .controls .glyphicon').removeClass('disabled')
        }
        calendar.populateMonth(monthNum);
        if (animate) {
            $('#calendarWrapper').append('<div class="calendar-days" id="oldCalendar"></div>');
            $('#oldCalendar').html(prevHtml);
            $('#calendar').css('overflow', 'hidden');
            if (monthNum > prevNum) {
                $('#calendar .calendar-days:not(#oldCalendar)').css({
                    position: "absolute",
                    left: "100%",
                    width: "100%"
                });
                $("#calendarWrapper").addClass('left');
            } else {
                $('#calendar .calendar-days:not(#oldCalendar)').css({
                    position: "absolute",
                    right: "100%",
                    width: "100%"
                });
                $("#calendarWrapper").addClass('right');
            }
            setTimeout(function() {
                $('#calendar').css('overflow', '');
                $("#calendarWrapper").removeClass('left').removeClass('right');
                $('#oldCalendar').remove();
                $('#calendar .calendar-days').removeAttr("style");
            }, 610);
        }

    },

    populateMonth: function(monthNum) {
        var $grids = $('#calendar div.calendar-grid');
        $grids.removeClass('has-event');
        $.each(calendar.data[monthNum], function(i, v) {
            var $day = $grids.find('[data-day=' + v.Día + ']').first().parent();
            if ($day.find('.event').length == 0) $day.prepend("<div class='event'></div>");
            if (typeof(v.Text) == "undefined") {
                $day.find('.event').append("<img src='" + calendar.categories[v.Categoría] + "'/>");
                $day.find('.event img').last().data('key', monthNum + '-' + i);
            } else {
                if (!$day.hasClass('has-event')) {
                    $day.addClass('has-event');
                    $day.append('<div class="igemtooltip"></div>');
                }
                $day.find('.igemtooltip').append("<div>" + v.Text + "</div>");
            }
        });
    },

    setEvents: function() {
        $('.calendar-header .controls .glyphicon').click(function() {
            var currentMonth = parseInt($('#calendar').data('currentMonth')),
                tgtMonth = currentMonth + ($(this).index() == 0 ? -1 : 1);
            calendar.loadMonth(tgtMonth, true);
        });

        $('.calendar-header .controls .dropdown ul li').click(function() {
            var tgtMonth = $(this).index();
            calendar.loadMonth(tgtMonth, true);
        });

        $('.calendar-legend li').on('mouseenter click', function() {
            var $li = $(this);
            if ($li.find('.igemtooltip').length == 0) {
                $li.append('<div class="igemtooltip"></div>');
                $li.find('.igemtooltip').html('<div>' + $li.data('tooltip') + '</div>').fadeIn();
            }
        });

        $(document).on('mouseleave click', '.igemtooltip', function(e) {
            var $tooltip = $(this);
            $tooltip.fadeOut(function() {
                if ($(this).closest('.calendar-grid').length == 0) $tooltip.remove();
            });
        });

        $(document).on('click', '.has-event', function(e) {
            var $tooltip = $(this).find('.igemtooltip').fadeIn();
        });

        $(document).on('click', '.event img', function(e) {
            e.stopPropagation();
            var key = $(this).data('key').split('-'),
                data = calendar.data[key[0]][key[1]];
            $('#eventModal .modal-title').html(data.Título);
            $('#imageWrapper > div').addClass('hidden');
            if (data.Imagen_principal.length > 1) {
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
                if (typeof(data.containSlider) !== "undefined") {
                    $('#modalSlider .slider-img').css({
                        backgroundSize: "auto 95%",
                    });
                    $('.carousel-inner').addClass('no-after');
                    $('#modalSlider .carousel-indicators').addClass("left");
                } else {
                    $('.carousel-inner').removeClass('no-after');
                    $('#modalSlider .carousel-indicators').removeClass("left");
                    $('#modalSlider .slider-img').css({
                        backgroundSize: "cover",
                    });
                }
            } else {
                $('#eventModal #mainImage').removeClass('hidden').html('<img class="modal-main-image" src="' + data.Imagen_principal[0] + '" />')
            }
            $('#eventModal .modal-text').html(data.Texto);
            $('#eventModal').modal('show');
        });
    }
}

var parallax = {
    init: function() {
        $(window).scroll(function() {
            $('[data-parallax]').each(function() {
                var scrollTop = $(window).scrollTop(),
                    offset = $(this).offset().top,
                    windowHeight = $(window).innerHeight(),
                    bottomUp = $(this).data('parallax') == 'bottom',
                    divHeight = $(this).outerHeight(),
                    newPosition;
                if (scrollTop + windowHeight > offset) {
                    newPosition = 100 * (offset - scrollTop) / windowHeight
                    if (!bottomUp) {
                        newPosition = newPosition;
                    }
                    $(this).css('background-position', '50% ' + newPosition + "%");
                }
            });

            $('[data-fixed]').each(function() {
                var scrollTop = $(window).scrollTop(),
                    offset = $(this).offset().top,
                    windowHeight = $(window).innerHeight(),
                    bottomUp = $(this).data('parallax') == 'bottom',
                    divHeight = $(this).outerHeight(),
                    newPosition;
                if (scrollTop + windowHeight > offset) {
                    newPosition = 1000 * (offset - scrollTop) / windowHeight
                    if (!bottomUp) {
                        newPosition = newPosition;
                    }
                    $(this).css('background-position', '50% ' + newPosition + "%");
                }
            });
        }).scroll();

    }
}