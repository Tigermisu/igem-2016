<?php include('header.html'); ?>
<span id="meta" data-this-page="hp"></span>

<div id="fullpage">
    <div class="section fp-auto-height" data-anchor="home">
        <div class="mini-cover" style="background-image: url(http://2016.igem.org/wiki/images/9/97/T--Tec-Chihuahua--human-practices-cover.jpeg)">
            <div class="overlay"></div>
            <div class="gradient-overlay"></div>
            <div class="content">
                <h1>Human Practices</h1>
            </div>
        </div>
    </div>
    <div class="section" style="background-color: #078794" data-anchor="humanpractices">
        <img class="page-preview" src="http://igem.org/wiki/images/f/f2/T--Tec-Chihuahua--HP.jpg">
    </div>        
    <div class="section" style="background-color: #F07033" data-anchor="ethics">
        <img class="page-preview" src="http://igem.org/wiki/images/6/67/T--Tec-Chihuahua--Ethicsimg.jpg">
    </div>
    <div class="section" style="background-color: #DA4E5B" data-anchor="economy">
        <img class="page-preview" src="http://igem.org/wiki/images/e/ed/T--Tec-Chihuahua--Economy.png">
    </div>
    <div class="section" style="background-color: #87982E" data-anchor="legal">
        <img class="page-preview" src="http://igem.org/wiki/images/1/1a/T--Tec-Chihuahua--Legal.jpg">
    </div>
    <div class="section" style="background-color: #078794" data-anchor="interview">
        <img class="page-preview" src="http://igem.org/wiki/images/8/87/T--Tec-Chihuahua--Interview.jpg">
    </div>
    <div class="section fp-auto-height" style="background-color: #333" data-anchor="footer">     
        <?php include('footer-nav.html') ?>
    </div>
</div>

<ul id="slideMenu" class="slide-menu">
    <li data-menuanchor="humanpractices"><a href="#humanpractices">Human Practices</a></li>
    <li data-menuanchor="ethics"><a href="#ethics">Ethics</a></li>
    <li data-menuanchor="economy"><a href="#economy">Economy</a></li>
    <li data-menuanchor="legal"><a href="#legal">Legal</a></li>
    <li data-menuanchor="interview"><a href="#interview">Interview</a></li>
</ul>

<div class="control-arrows">
    <span class="glyphicon glyphicon-chevron-up nope" id="upArrow"></span>
    <span class="glyphicon glyphicon-chevron-down" id="downArrow"></span>
</div>    

<?php include('minfooter.html'); ?>