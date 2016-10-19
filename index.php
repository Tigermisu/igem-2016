<?php include('header.html'); ?>
<span id="meta" data-this-page="home"></span>

<div id="loadingScreen" class="loading-screen">
    <div class="content">
        <h2 style="position: relative; top: 50px;">Loading</h2>
        <div class='uil-spin-css' style='-webkit-transform:scale(0.4);'><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>
    </div>    
</div>

<div id="fullpage">
    <div class="section" data-anchor="home">
            <div class="cover" data-parallax="bottom" data-fixed>
            <div class="overlay"></div>
            <div class="gradient-overlay"></div>
            <div class="content">
                <img src="http://2016.igem.org/wiki/images/c/ce/T--Tec-Chihuahua--logo-medium.png" alt="Myxobacteria Project">
            </div>
        </div>
    </div>
    <div class="section" style="background-color: #078794" data-anchor="Agriculture">
        <div class="sorted">
            <div class="grow">
                <p>
                    Phytopathogens are a great problem concerning agriculture, and frequently lead to great economic losses. Although chemical pesticides and fungicides have been used against these pathogens, they often result in the accumulation of toxic compounds or increase the resistance of the pathogens. 
                </p>
            </div>
            <div>
                <img src="http://igem.org/wiki/images/thumb/f/f8/T--Tec-Chihuahua--Insecticide.jpg/424px-T--Tec-Chihuahua--Insecticide.jpg.png" class="img-responsive big">
            </div>
        </div>
        <div class="clearfix"></div>

    </div>
    <div class="section" style="background-color: #F07033" data-anchor="Myxobacteria">
        <div class="sorted">
            <div>
                <img src="http://igem.org/wiki/images/c/c4/T--Tec-Chihuahua--Bachongo.jpg" class="img-responsive big">
            </div>

            <div class="grow">
                <p>
                    This is why biocontrol using microorganisms has become a viable alternative. Myxobacteria are a common and diverse group of bacteria largely fed through predation, able to produce a wide range of secondary metabolites. The fungal antagonisms may be due to competition for nutrients or the production of antifungal compounds. 
                </p>
            </div>
        </div>

    </div>
    <div class="section" style="background-color: #DA4E5B" data-anchor="mission">
        <div class="sorted">
            <div class="grow">
                <p>
                    The aim of this investigation is genetically engineer Myxobacteria mainly to enhance their antifungal capabilities and increase their temperature resistance. We intend to isolate phytopathogenic organisms from damaged alfalfa crops nearby Chihuahua city, and prove the efficiency of our modified bacteria making confrontations between them. We also want to broaden the impact in affected crops such as chilli and potato.
                </p>
            </div>
            <div>
                <img src="http://igem.org/wiki/images/thumb/c/c9/T--Tec-Chihuahua--science.jpg/355px-T--Tec-Chihuahua--science.jpg.png" class="img-responsive big">
            </div>
        </div>
    </div>
    <div class="section fp-auto-height" style="background-color: #333" data-anchor="footer">     
        <?php include('footer-nav.html') ?>
    </div>
</div>

<ul id="slideMenu" class="slide-menu">
    <li data-menuanchor="Agriculture"><a href="#Agriculture">Agriculture</a></li>
    <li data-menuanchor="Myxobacteria"><a href="#Myxobacteria">Myxobacteria</a></li>
    <li data-menuanchor="mission"><a href="#mission">Mission</a></li>
</ul>

<div class="control-arrows">
    <span class="glyphicon glyphicon-chevron-up nope" id="upArrow"></span>
    <span class="glyphicon glyphicon-chevron-down" id="downArrow"></span>
</div>    

<?php include('minfooter.html'); ?>