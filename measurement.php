<?php include('header.html'); ?>
<span id="meta" data-this-page="project"></span>
<div class="nav-backdrop"></div>
<div class="mini-cover" style="background-image: url(http://igem.org/wiki/images/thumb/a/a5/T--Tec-Chihuahua--S10.10b.jpg/798px-T--Tec-Chihuahua--S10.10b.jpg); background-position: 10% 35%">
    <div class="overlay"></div>
    <div class="gradient-overlay"></div>
    <div class="content">
        <h1>Measurement</h1>
    </div>
</div>

<div class="std-section margin">
    <div class="container">

        <h2>Summary</h2>

        <div class="row">
            <div class="col-lg-4 col-sm-6">
                <img src="http://igem.org/wiki/images/thumb/5/51/T--Tec-Chihuahua--Sensor.jpg/395px-T--Tec-Chihuahua--Sensor.jpg.png" class="img-responsive center-block" style="max-height: 200px;">
            </div>
            <div class="col-lg-8 col-sm-6">

                <p>The purpose of developing a sensor for this project is to correctly measure transformation efficiency.</p>
                <p> The sensor had to analyze the surface of each sample and compare it to a successful test. To do the analysis, the sensor runs a scan across the surface of the petri dish in order to map the regions in which colonies were successfully deployed.
                    With this information, we can determine at which level the transformation was complete. Additionally, the sensor runs a scan at determined lapses of time to see how it develops. </p>
            </div>
        </div>


        <h2>Problem Statement</h2>
        <div class="row">
            <div class="col-lg-8 col-sm-6">
                <p>The transformation process of myxobacteria needs to be measured in order to determine its effectiveness. The problem is that, to measure the effectiveness, there is no unit to measure how well the transformation was deployed. </p>
                <h2>Information Gathering</h2>
                <p>Myxobacteria can be transformed to produce proteins that reflect light. With this in mind, there are sensors that detect the amount of light that is emitted from a source.</p>
                <p>The transformation process is not instantaneous. The changes on the surface occur slowly during the incubation process. This means that the system has to be measured at determined lapses of time. </p>

            </div>

            <div class="col-lg-4 col-sm-6">
                <img src="http://igem.org/wiki/images/thumb/5/52/T--Tec-Chihuahua--Plasmido.jpg/293px-T--Tec-Chihuahua--Plasmido.jpg.png" class="img-responsive center-block" style="max-height: 300px;">
            </div>
        </div>



        <h2>Materials</h2>
        <div class="row">
            <div class="col-md-offset-2 col-md-8">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>Units</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Arduino UNO</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>USB cable type B (for the Arduino)</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Photoresistors</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>100kΩ resistor</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Multiplexor 74153</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>H Bridge L293d</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Red LED</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>DVD drive</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>5V Power Source</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>AWG 22 wire</td>
                            <td>3 meters</td>
                        </tr>
                        <tr>
                            <td>Soldering iron</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Solder 60% tin and 40% lead</td>
                            <td>1 meter</td>
                        </tr>
                        <tr>
                            <td>Perfboard</td>
                            <td>20x20 cm</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-2">&nbsp;</div>
        </div>
        <p>Due to the fact that the Arduino UNO has only six ADC channels, we need to measure the value of each of the photoresistors. In order to achieve this, we use a multiplexor to select each photoresistor one by one. After this, we need a circuit to
            control the scanning system. We use a DVD drive and place the sensors so that they scan line by line as shown in the following picture.</p>




        <img src="http://2016.igem.org/wiki/images/3/31/T--Tec-Chihuahua--LineScan.jpg" alt="Diagram showing how the sensor scans the data" class="img-responsive center-block">
        <p>A light source is used to illuminate the surface scanned. The reflectin will act reflecting the light emitted by red LEDs. After all the surface is scanned, a .txt file is created so that the results can be uploaded to a server. Red leds are useful
            because they fall well into the sensitivity of the photoresistors.</p>
        <p>Each photoresistor is calibrated using a BH1750 light sensor, which has a 16-bit resolution. The light sensor is used as a reference against the same light source and inclination. The BH1750 has its output expressed in lux.</p>
        <p>In order to calibrate each sensor, an LED was set. It is written the maximum value sensed by the photoresistor and the maximum value measured by the BH1750. This produces a correspondence of values.</p>
        <div class="row margin">
            <div class="col-md-6">
                <img src="http://2016.igem.org/wiki/images/0/0b/T--Tec-Chihuahua--Illuminance.jpg" alt="BH1750 light sensor characteristic curves." class="img-responsive center-block">
            </div>
            <div class="col-md-6">
                <img src="http://2016.igem.org/wiki/images/0/02/T--Tec-Chihuahua--SensorCharac.jpg" alt="Sensitivity of the photoresistors." class="img-responsive center-block">
            </div>
        </div>
        <p>Each line of photoresistors represents a segment of the sample. When graphed and lined together, they will map the surface of the petri dish and the contents. If certain point of the coordinate presents a high value, then it means that there is
            reflectin is present.</p>

        <h2>Conceptual Development</h2>
        <p>The sensor can be broken into six stages. </p>
        <ul class="no-bullet">
            <li>1. <strong>Sensing stage.</strong> – Light coming from a LED is directed to the surface. The proteins reflect part of the light. The array of sensors detect the reflected light. </li>
            <li>2. <strong>Acquisition algorithm.</strong> – The data from the sensors is entered to the MCU.</li>
            <li>3. <strong>Conversion stage.</strong> - Here, the continuous analog signal from each photoresistor is converted to a digital discrete value using the internal ADC of the MCU. These values are readable by computers.</li>
            <li>4. <strong>Packet conversion.</strong> - The data from each scan is converted to a packet in .csv file format.</li>
            <li>5. <strong>Server uploading.</strong> - The packets are uploaded to the server.</li>
            <li>6. <strong>Data plotting.</strong> – The server plots the data of each packet so that is graphically understandable. </li>
        </ul>

        <div class="margin">
            <img src="http://igem.org/wiki/images/e/ed/T--Tec-Chihuahua--Biosensor.jpg" alt="Scanning flowchart" class="center-block img-responsive">
            <p><strong>Notation</strong></p>
            <p>ADC. - Analog to Digital Converter. A device that converts a continuous analog signal into digital discrete signal readable by a microcontroller.</p>
            <p>MCU. - Microcontroller. A computer on an integrated circuit. </p>
        </div>

        <h2>Sensor Array Scanner</h2>
        <p>The sensor works like an office scanner. The scanner part is composed by 10 photoresistors aligned so that they cover the Y axis of the sample. They are in series with a 100kΩ resistor. Using a voltage divider, it is obtained the value that corresponds
            to a determined level of light. Using a 16-bit resolution optical sensor, the value of the photoresistor is proportionally assigned to the value obtained with the optical sensor. This way, the sensors are calibrated. Because the optical sensor
            already has a curve that outputs the results in lumens, we can determine the amount of light using the photoresistors.</p>
        <p>Why using photoresistors instead of an optical sensor? The answer is that photoresistors are affordable and easy to buy in Mexico; as well as accessible in any country in the world since they are easy to find and acquire. Also, the sensitivity
            can be adjusted using a voltage divider using the correct resistor. This way, the sensor can be adjusted with more sensitivity to a big or small amount of light. </p>
        <p>The ADC used is inside the Arduino UNO, which has an ATmega328P. This ADC has a resolution of 10 bits, which in total gives us 1024 values for the sensors. (Atmel Corporation, 2015). After each value of the photoresistors is stored, the sensor
            will move forward to scan the next section.</p>
        <p>The data is transmitted using the Serial Port emulated by the Arduino to Processing, a program that will create a .txt file which will store all the values.</p>
        <p>After each file is created, a newer file with newer data will replace the old one. Each file represents the state of the myxobacteria at certain hour of the process. </p>
        <p>Finally, the data is periodically uploaded to a server.</p>
        <p>The periodicity of the scanning can be readjusted so that the scanning process occurs every 10 minutes, 20 minutes, 30 minutes and so forth.</p>

        <h2>Server</h2>
        <div class="row">
            <div class="col-lg-8 col-sm-6">
                <p>An external website has been developed to allow the uploading and visualization of data scanned by this sensor. The server’s front-end is made in the state-of-the-art bootstrap framework, while the back-end relies on the robust Laravel
                    Php engine. The website is hosted at a team member’s server and can be found at the address <a href="http://igem.jaquez.mx/">http://igem.jaquez.mx/</a></p>
                <p>The uploading is reserved for registered users, to avoid any unauthorized person to upload random data as if it were legitimate scans. Uploads can be configured to be a one-shot or a periodic re-upload in order to automatically upload
                    new data gathered by the sensor. A small text-based console shows color-coded feedback to the uploader, as well as provides upload logs for the current session.</p>
            </div>
            <div class="col-lg-4 col-sm-6">
                <img src="http://igem.org/wiki/images/thumb/1/19/T--Tec-Chihuahua--Server.jpg/800px-T--Tec-Chihuahua--Server.jpg.png" alt="Screenshot of the server's main menu" class="img-responsive center-block">
            </div>
        </div>
        <div class="row margin">
            <div class="col-sm-7"><img src="http://igem.org/wiki/images/thumb/9/99/T--Tec-Chihuahua--Upload.jpg/800px-T--Tec-Chihuahua--Upload.jpg.png" alt="Upload view" class="img-responsive center-block"></div>
            <div class="col-sm-5"><img src="http://igem.org/wiki/images/thumb/f/f7/T--Tec-Chihuahua--Scan.jpg/800px-T--Tec-Chihuahua--Scan.jpg.png" alt="Scan display view" class="img-responsive center-block"></div>
        </div>

        <p>Guests, and registered users, are able to view the results of the scans in the other section. Scans are both shown as raw data (numbers obtained from each sensor in a grid) and plotted as a 3D surface. Each scan is automatically tagged with the
            date and time of its upload.</p>

    </div>
</div>


<?php include('footer.html'); ?>