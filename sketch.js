var data;
var url;
var temp;
var leng;
var xPos = 0;
var infoLength= JSON.infos.info.length;
var id = [];


function preload(){
    url = "https://api.mlab.com/api/1/databases/arduino/collections/temperaturebywindows?apiKey=zIsWR2dNK8WOSlT_tNbOaPC753CiRs_p";
    
    data = loadJSON(url);
}
 

function setup(){

  var canvas = createCanvas(screen.width,screen.height);
  leng = Object.keys(data).length;
  canvas.parent('sketch-holder');
  var val = Object.values(data);
  
    
}



function draw(){
   
   background(241, 196, 15);
    

        
    for (var i = 0; i < leng; i++) {
        for (var j = 0; j < leng; j++) {
        
            var a = id.push(val[i]._id);   
    }
         stroke = (100);
            line(xPos,a*i,a*i,a*i);  
    }
    
    if (xPos >= width) {
        xPos = 0;
        background(241, 196, 15);
    }
   else {
        xPos++;
    }

       
}