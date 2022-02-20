rightWristx=0;
rightWristy=0;
leftWristx=0;
leftWristx=0
song1="";
song2="";
function setup(){
canvas=createCanvas(600,500)
canvas.center()

video=createCapture(VIDEO)
video.hide()

poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('poseNet',gotResult)
}
function modelLoaded(){
    console.log("model loaded!");
}
function draw(){
    image(video,0,0,600,500)
}
function preload(){
    song1=loadSound("song1.mp3")
    song2=loadSound("song2.mp3")
}
function gotResult(result){
    if(result.length>0){
    rightWristx=result[0].pose.rightWrist.x;
    rightWristy=result[0].pose.rightWrist.y;
    leftWristx=result[0].pose.rightWrist.x;
    leftWristx=result[0].pose.rightWrist.y;
    }
}