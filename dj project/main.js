song1="";
song2="";
function preload(){
song1=loadSound("m1.mp3");
song2=loadSound("m2.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
   }
function modelLoaded(){
    console.log("PoseNet is initilized")


}
function draw(){
    image(video,0,0,600,500);
}