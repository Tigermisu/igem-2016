<?php include('header.html'); ?>
<span id="meta" data-this-page="project"></span>

<div id="loadingScreen" class="loading-screen">
    <div class="content">
        <h2 style="position: relative; top: 50px;">Loading</h2>
        <div class='uil-spin-css' style='-webkit-transform:scale(0.4);'><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>
    </div>    
</div>

<div id="fullpage">
    <div class="section fp-auto-height" data-anchor="home">
        <div class="mini-cover" style="background-image: url(http://parts.igem.org/wiki/images/a/a5/T--Tec-Chihuahua--K2069007.jpg)">
            <div class="overlay"></div>
            <div class="gradient-overlay"></div>
            <div class="content">
                <h1>Parts</h1>
            </div>
        </div>
    </div>
    <div class="section" style="background-color: #078794" data-anchor="used">
        <div class="sorted">
            <div class="grow">
                <p>
                    <strong>Basic parts</strong> <br/ >
                    - <a data-toggle="modal" href="#BBa_K541506">BBa_K541506:  Reflectin1A from cephalopod (2)</a><br/ >

	                <strong>Construction intermediates</strong> <br/ >
		            - <a data-toggle="modal" href="#BBa_K525998">BBa_K525998: T7 promoter + RBS (1)</a> <br/ >
		            - <a data-toggle="modal" href="#BBa_K1364007">BBa_K1364007: RBS + Antifungal GAFP-1 + Double terminator</a> <br/ >
                </p>
            </div>
            <div>
                <img src="http://2016.igem.org/wiki/images/thumb/5/55/T--Tec-Chihuahua--Plasmid.jpg/593px-T--Tec-Chihuahua--Plasmid.jpg.png" class="img-responsive">
            </div>
        </div>
        <div class="clearfix"></div>
    </div>    
    <div class="section" style="background-color: #87982E" data-anchor="submitted">
        <div class="sorted">            
            <div>
                <img src="http://2016.igem.org/wiki/images/thumb/5/55/T--Tec-Chihuahua--Plasmid.jpg/593px-T--Tec-Chihuahua--Plasmid.jpg.png" class="img-responsive">
            </div>
            <div class="grow">
                <p>
	                <strong>Construction intermediates</strong> <br/ >
		            - <a data-toggle="modal" href="#BBa_K2069000">BBa_K2069000 INT 3</a> <br/ >
                    - <a data-toggle="modal" href="#BBa_K2069001">BBa_K2069001 INT 1</a> <br/ >
                    - <a data-toggle="modal" href="#BBa_K2069003">BBa_K2069003 sem1</a> <br/ >
                    - <a data-toggle="modal" href="#BBa_K2069005">BBa_K2069005 sem2</a> <br/ >
                    - <a data-toggle="modal" href="#BBa_K2069006">BBa_K2069006 Biobrick</a> <br/ >
                    - <a data-toggle="modal" href="#BBa_K2069007">BBa_K2069007 Eme</a> <br/ >
                </p>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>    
    <div class="section fp-auto-height" style="background-color: #333" data-anchor="footer">
        <?php include('footer-nav.html') ?>
    </div>
</div>

<ul id="slideMenu" class="slide-menu">
    <li data-menuanchor="used"><a href="#used">New Parts</a></li>
    <li data-menuanchor="submitted"><a href="#submitted">Submitted Parts</a></li>
</ul>

<div class="control-arrows">
    <span class="glyphicon glyphicon-chevron-up nope" id="upArrow"></span>
    <span class="glyphicon glyphicon-chevron-down" id="downArrow"></span>
</div>

<div class="modal fade" tabindex="-1" role="dialog" id="BBa_K541506">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">BBa_K541506:  Reflectin 1A from cephalopod</h4>
            </div>
            <div class="modal-body">
                <p>
                    This part is the Coding Sequence of a self-assembling protein that has the capacity to reflect sunlight, depending on the thickness of the protein layer, it is expressed on the outer membrane of gram negative bacteria. This protein will be used to measure protein expression.
                </p>
                <a href="http://parts.igem.org/Part:BBa_K541506">
                    <p>http://parts.igem.org/Part:BBa_K541506</p>
                </a>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Dismiss</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" tabindex="-1" role="dialog" id="BBa_K525998">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">BBa_K525998: T7 promoter + RBS</h4>
            </div>
            <div class="modal-body">
                <p>
                   This part contains the phage T7 promoter along with the BBa_B0034 Ribosome Binding Site. This specific promoter was chosen for overexpression and capacity of the Myxobateria RNA polymerase to read phage promoters, such as T7.
                </p>
                <a href="http://parts.igem.org/Part:BBa_K525998">
                    <p>http://parts.igem.org/Part:BBa_K525998</p>
                </a>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Dismiss</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" tabindex="-1" role="dialog" id="BBa_K1364007">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">BBa_K1364007: RBS + Antifungal GAFP-1 + Double terminator</h4>
            </div>
            <div class="modal-body">
                <p>
                   This part encodes a translational unit that contains the BBa_K780002 RBS, which is a strong promoter on Bacillus subtilis, but works with a strength of 10.13% relative to the BBa_B0032 RBS on E. coli; and the CDS of Gastrodia anti-fungal protein, which is a mannose and chitin binding lectin originating from the Asiatic orchid Gastrodia elata that is able to inhibit the growth of multiples species of plant pathogenic fungi. This part also includes two terminators, B0010 and B0012.
                </p>
                <a href="http://parts.igem.org/Part:BBa_K1364007">
                    <p>http://parts.igem.org/Part:BBa_K1364007</p>
                </a>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Dismiss</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" tabindex="-1" role="dialog" id="BBa_K2069000">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">BBa_K2069000: INT 3</h4>
            </div>
            <div class="modal-body">
                <img src="http://igem.org/wiki/images/b/bc/T--Tec-Chihuahua--K2069000.jpg" alt="K2069000" class="img-responsive">
                <p>
                   This intermediate part contains the CDS of the chaperonin 60 (along with chaperonin 10 provides resistance to high temperatures) and CspC (it provides resistance to low temperatures)
                </p>
                <a href="http://parts.igem.org/Part:BBa_K2069000">
                    <p>http://parts.igem.org/Part:BBa_K2069000</p>
                </a>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Dismiss</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" tabindex="-1" role="dialog" id="BBa_K2069001">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">BBa_K2069001: INT 1</h4>
            </div>
            <div class="modal-body">
                <img src="http://igem.org/wiki/images/1/19/T--Tec-Chihuahua--K2069001.jpg" alt="K2069001" class="img-responsive">
                <p>
                   Allows the easy assembly for expression of a cephalopod Reflectin 1A with a T7 promoter.
                </p>
                <a href="http://parts.igem.org/Part:BBa_K2069001">
                    <p>http://parts.igem.org/Part:BBa_K2069001</p>
                </a>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Dismiss</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" tabindex="-1" role="dialog" id="BBa_K2069003">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">BBa_K2069003: sem1</h4>
            </div>
            <div class="modal-body">
                <img src="http://igem.org/wiki/images/d/de/T--Tec-Chihuahua--K2069003.jpg" alt="K2069003" class="img-responsive">
                <p>
                   This part also allows the easy assembly for expression of a cephalopod Reflectin 1A with a T7 promoter; and also contains a chaperonin 10 that confers resistance to atypical temperatures. 
                </p>
                <a href="http://parts.igem.org/Part:BBa_K2069003">
                    <p>http://parts.igem.org/Part:BBa_K2069003</p>
                </a>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Dismiss</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" tabindex="-1" role="dialog" id="BBa_K2069005">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">BBa_K2069005: sem2</h4>
            </div>
            <div class="modal-body">
                <img src="http://parts.igem.org/Part:BBa_K2069005" alt=K2069005"" class="img-responsive">
                <p>
                   This intermediate part also allows the easy assembly for expression of chaperonin 60 (along with chaperonin 10 provides resistance to high temperatures), CspC (it provides resistance to low temperatures) and GAFP-1 (antifungal protein from Gastrodia elata)
                </p>
                <a href="http://parts.igem.org/Part:BBa_K2069005">
                    <p>http://parts.igem.org/Part:BBa_K2069005</p>
                </a>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Dismiss</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" tabindex="-1" role="dialog" id="BBa_K2069006">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">BBa_K2069006: Biobrick</h4>
            </div>
            <div class="modal-body">
                <img src="http://parts.igem.org/wiki/images/7/73/T--Tec-Chihuahua--K2069006.jpg" alt="K2069006" class="img-responsive">
                <p>
                   This part consists of a Cpn10/Cpn60 system of proteins and a CspC protein to provide resistance to temperature. It also expresses an antifungic gene, GAFP-1 from Gastrodia, cephalopod Reflectin 1A and expression is regulated by a T7 promoter. 
                </p>
                <a href="http://parts.igem.org/Part:BBa_K2069006">
                    <p>http://parts.igem.org/Part:BBa_K2069006</p>
                </a>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Dismiss</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" tabindex="-1" role="dialog" id="BBa_K2069007">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">BBa_K2069007: Eme</h4>
            </div>
            <div class="modal-body">
                <img src="http://parts.igem.org/wiki/images/a/a5/T--Tec-Chihuahua--K2069007.jpg" alt="K2069007" class="img-responsive">
                <p>
                   This part allows the expression of Reflectin 1A and GAFP-1 under control of a T7 promoter. 
                </p>
                <a href="http://parts.igem.org/Part:BBa_K2069007">
                    <p>http://parts.igem.org/Part:BBa_K2069007</p>
                </a>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Dismiss</button>
            </div>
        </div>
    </div>
</div>

<?php include('minfooter.html'); ?>