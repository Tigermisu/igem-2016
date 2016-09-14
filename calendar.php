<?php include('header.html'); ?>
<span id="meta" data-this-page="notebook"></span>
    <div class="nav-backdrop"></div>
    <div class="mini-cover" style="background-image: url(img/notes.jpg)">
        <div class="overlay"></div>
        <div class="gradient-overlay"></div>
        <div class="content">
            <h1>Calendar</h1>
        </div>
    </div>


    <div class="std-section blue-bg">
        <div class="container">
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
                                <ol class="carousel-indicators">
                                
                                </ol>
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