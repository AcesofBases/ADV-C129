scoreLeftWrist=0;


peter_pan="";
harry_potter="";

LeftWristX=0;
LeftWristY=0;

RightWristX=0;
RightWristY=0;

song="";
function preload(){
peter_pan=loadSound("music.mp3");
harry_potter=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose" ,gotPoses);
}

function draw(){
    image(video,0,0,600,500);
    fill("#ff0000");
    stroke("#000000");
    strokeWeight(4);

    peter_pan = peter_pan.isPlaying();
    console.log(peter_pan);
    if(scoreLeftWrist>0.2)
    {
    circle(LeftWristX,LeftWristY,20);


   
    }
}
function modelLoaded(){
    console.log("poseNet initialised"); 
}
function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
    
        scoreLeftWrist=results[0].pose.keypoints[9].score;

        LeftWristX=results[0].pose.leftWrist.x;
        LeftWristY=results[0].pose.leftWrist.y;
        console.log("LeftWristX = "  +LeftWristX + "LeftWristY = " + LeftWristY);
    
    RightWristX=results[0].pose.rightWrist.x;
    RightWristY=results[0].pose.rightWrist.y;
    console.log("RightWristX = " + RightWristX + "RightWristY = " + RightWristY);
    
    }
    }