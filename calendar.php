<?php include('header.html'); ?>
<span id="meta" data-this-page="notebook"></span>
    <div class="nav-backdrop"></div>
    <div class="mini-cover" style="background-image: url(http://2016.igem.org/wiki/images/1/15/T--Tec-Chihuahua--calendarcover.jpg)">
        <div class="overlay"></div>
        <div class="gradient-overlay"></div>
        <div class="content">
            <h1>Calendar</h1>
        </div>
    </div>


    <div class="std-section blue-bg">
        <div class="container">       
            <div class="calendar-legend">
                <h2>Legend</h2>
                <ul>
                    <li data-tooltip="Click this icon in the calendar to see when and what were our meetings about">
                        <img src="http://igem.org/wiki/images/thumb/a/a2/T--Tec-Chihuahua--Meeting.jpg/308px-T--Tec-Chihuahua--Meeting.jpg.png">
                        <p>Meeting</p>
                    </li>
                    <li data-tooltip="Tec-Chihuahua team had the opportunity to collaborate with a lot of teams. Click the icon on the calendar to find out more!">
                        <img src="http://igem.org/wiki/images/thumb/3/3c/T--Tec-Chihuahua--Collaboration.jpg/320px-T--Tec-Chihuahua--Collaboration.jpg.png">
                        <p>Collaboration</p>
                    </li>
                    <li data-tooltip="This icon will show you every activity related to the laboratory. Click it in the calendar and learn more about our project">
                        <img src="http://igem.org/wiki/images/thumb/2/2d/T--Tec-Chihuahua--ProjectDN.jpg/155px-T--Tec-Chihuahua--ProjectDN.jpg.png">
                        <p>Project</p>
                    </li>
                    <li data-tooltip="Not everything is just lab work! Click the Human Practices icon in the calendar to learn about visits to cultivations and sampling">
                        <img src="http://igem.org/wiki/images/thumb/f/f2/T--Tec-Chihuahua--HP.jpg/282px-T--Tec-Chihuahua--HP.jpg.png">
                        <p>Human Practices</p>
                    </li>
                    <li data-tooltip="It is important making people be curious about Synthetic Biology. Click this icon to learn about spreading the voice!">
                        <img src="http://igem.org/wiki/images/thumb/0/0f/T--Tec-Chihuahua--Diffusion.jpg/200px-T--Tec-Chihuahua--Diffusion.jpg.png">
                        <p>Diffusion</p>
                    </li>
                    <li data-tooltip="See every activity directly related to iGEM">
                        <img src="http://2016.igem.org/wiki/images/3/30/T--Tec-Chihuahua--igem-small.png">
                        <p>iGem</p>
                    </li>
                    <li data-tooltip="The development of a sensor is no easy task. Click this icon to know more about our sensor!">
                        <img src="http://igem.org/wiki/images/thumb/5/51/T--Tec-Chihuahua--Sensor.jpg/395px-T--Tec-Chihuahua--Sensor.jpg.png">
                        <p>Sensor</p>
                    </li>
                    <li data-tooltip="Click on the green days to see our work done that day.">
                        <div style="position:relative; top: 10px; border-radius: 5px; width: 50px; height: 30px; background-color: #006900; display: inline-block;"></div>
                        <p>Activity</p>
                    </li>
                </ul>
            </div>  
            <div id="calendar" class="calendar">
                <div class="calendar-header">
                    <div class="month-name"></div>
                    <div class="controls">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <div class="dropdown">
                            <button id="dropdownMonth" type="button" data-toggle="dropdown">
                                Month
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu">
                                <li>January</li>
                                <li>February</li>
                                <li>March</li>
                                <li>April</li>
                                <li>May</li>
                                <li>June</li>
                                <li>July</li>
                                <li>August</li>
                                <li>September</li>
                                <li>October</li>
                                <li>November</li>
                                <li>December</li>
                            </ul>
                        </div>
                        <span class="glyphicon glyphicon-chevron-right"></span>
                    </div>
                </div>
                <div id="calendarWrapper" class="calendar-wrapper">   
                    <div class="calendar-days">
                        <div class="calendar-row">
                            <div class="calendar-grid">
                                <p class="day-number">1</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">2</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">3</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">4</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">5</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">6</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">7</p>
                            </div>
                        </div>
                        <div class="calendar-row">
                            <div class="calendar-grid">
                                <p class="day-number">1</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">2</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">3</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">4</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">5</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">6</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">7</p>
                            </div>
                        </div>
                        <div class="calendar-row">
                            <div class="calendar-grid">
                                <p class="day-number">1</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">2</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">3</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">4</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">5</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">6</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">7</p>
                            </div>
                        </div>
                        <div class="calendar-row">
                            <div class="calendar-grid">
                                <p class="day-number">1</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">2</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">3</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">4</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">5</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">6</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">7</p>
                            </div>
                        </div>
                        <div class="calendar-row">
                            <div class="calendar-grid">
                                <p class="day-number">1</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">2</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">3</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">4</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">5</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">6</p>
                            </div>
                            <div class="calendar-grid">
                                <p class="day-number">7</p>
                            </div>
                        </div>
                        
                    </div>                   
                    <div class="clearfix"></div>     
                </div>
            </div>            
        </div>
    </div>

    <div class="std-section">
        
    </div>

    <div class="modal fade" tabindex="-1" role="dialog" id="eventModal">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                    <h4 class="modal-title"></h4>
                </div>
                <div class="modal-body">
                    <div id="imageWrapper" class="modal-image-wrapper">
                        <div id="mainImage" class="hidden"></div>
                        <div id="sliderWrapper" class="hidden">
                            <div id="modalSlider" class="carousel slide" data-ride="carousel">
                                <omgigemstopaddingdefaultstylestohtmltags class="carousel-indicators">
                                
                                </omgigemstopaddingdefaultstylestohtmltags>
                                <div class="carousel-inner" role="listbox">
                                
                                </div>
                                <a class="left carousel-control" href="#modalSlider" role="button" data-slide="prev">
                                    <span class="glyphicon glyphicon-chevron-left"></span>
                                </a>
                                <a class="right carousel-control" href="#modalSlider" role="button" data-slide="next">
                                    <span class="glyphicon glyphicon-chevron-right"></span>
                                </a>
                                </div>
                        </div>
                    </div>
                    <p class="modal-text"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

<?php include('footer.html'); ?>