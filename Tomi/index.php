<?php 
$xml=simplexml_load_file("https://api.openweathermap.org/data/2.5/weather?id=785965&appid=545b1563d51e106eb6f284b4b1204d47&mode=xml&lang=hu&units=metric");


?>

<!DOCTYPE html>
<html lang="hu">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta List="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
    </style>
    <title>Document</title>
  </head>
  <body>
    <link rel="stylesheet" href="index.css" />
    <div class="t-controlbar">
      <button class="t-volume" onclick="csere(), animation()">
        <img class="t-volumeimg" src="icons/volume.png" />
      </button>
    </div>
    <div class="t-weatherbox"></div>
    <div class="t-weatherinfo">
      <p class="t-city"><?php echo$xml->city['name']?></p>
      <div class="t-temperaturecontainer">
        <p class="t-temperature"><?php echo $xml->temperature['value'] ;
          ?>°C</p>

        <div class="t-minmax">
          <p class="t-mintemperature"><?php $tmin = round($xml->temperature['min'] - 0); echo $tmin ;
         ?>°C</p>
          <p class="t-maxtemperature"><?php $tmax = round($xml->temperature['max'] - 0); echo $tmax ;
         ?>°C</p>
        </div>
      </div>
      <div class="t-etcinfo">
        <div class="t-humidity">
          <img class="t-humidityimg" src="icons/humidity.png" />
          <p class="t-humiditytext"><?php echo $xml->humidity['value'];?> %</p>
        </div>
        <div class="t-air-pressure">
          <img class="t-air-pressureimg" src="icons/barometer.png" />
          <p class="t-air-pressuretext"><?php echo $xml->pressure['value'];?> hPa</p>
        </div>
      </div>
      <div class="t-sun">
        <div class="t-sunrise">
          <img src="icons/sunrise.png" />
          <p>6:10</p>
        </div>
        <div class="t-sunset">
          <img src="icons/sunset.png" />
          <p>20:00</p>
        </div>
      </div>
      <div class="t-moon">
        <div class="t-moonrise">
          <img src="icons/moonrise.png" />
          <p>6:10</p>
        </div>
        <div class="t-moonset">
          <img src="icons/moonset.png" />
          <p>20:00</p>
        </div>
      </div>
    </div>

    <script>
      function csere() {
        var fullurl = window.location.href;
        var link = fullurl.replace("index.php", "");
        var link = link + "icons/";

        var x = document.querySelector(".t-volumeimg").src;
        if (x == link + "volume.png") {
          document.querySelector(".t-volumeimg").src = link + "no-sound.png";
        } else {
          document.querySelector(".t-volumeimg").src = link + "volume.png";
        }
      }

      function animation() {
        document.querySelector(".t-volumeimg").classList.add("animation");
        setTimeout(function () {
          document.querySelector(".t-volumeimg").classList.remove("animation");
        }, 300);
      }

      //https://api.openweathermap.org/data/2.5/weather?id=785965&appid=545b1563d51e106eb6f284b4b1204d47
    </script>
  </body>
</html>
