 img = "" 
 status = "" 
 object = []
 function setup(){
     canvas = createCanvas(380, 380); 
     canvas.center(); 
     video = createCapture(VIEDO); 
     video.hide();  
     objectdetector = ml5.objectDetector('cocossd' ,modelLoaded); 
     document.getElementById("status").innerHTML = "status : Detecting object"; 
 } 
function modelLoaded() 
{
console.log("Model is Loaded!") 
status = true;  
objectdetector.detect(video, gotResult); 
} 

 function preload(){
img = loadImage('NEW YORK.jpeg'); 
 } 
function draw()
{
image(video, 0, 0, 380, 380); 

if (status != "") 
{ 
    r= random(255);
    g= random(255);
    b= random(255);
    objectDetector.detect(video, gotResult);
    for(i = 0; i< object,length; i++) 
    {
        document.getElementById("status").innerHTML = "status : object detected" 
        document.getElementById("number_of_objects").innerHTML = "number of objects that are detected are ..."+ object.length;

        fill(r, g ,b) 
        percent = floor(object[i].confidence * 100); 
        text(object[i].label + "" +  percent + "%", object[i].x,object[i].y); 
        noFill(); 
        stroke(r, g, b); 
        rect(object[i].x, object[i].y, object[i].width, object[i].height); 
    }
}
//fill("white");  text("Wendy", 240, 280 ); noFill();stroke("white"); rect(240, 280, 100, 80);  

//fill("white"); text("money EX", 185, 280)noFill();stroke("white"); rect(185, 280, 80, 60);  
   

function gotResult(error, results) 
{
    if(error) 
    {
        console.log(error); 
    }  
    console.log(results); 
    object = results; 

}
