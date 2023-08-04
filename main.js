function setup(){
    canvas=createCanvas(500, 500);
 canvas.center();
      video=createCapture( VIDEO );
  video.size(500, 500);
  poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }

  function draw(){
    background('white');
    fill('black');
    text('Hello World', noseX, noseY );
    textSize(difference);
    document.getElementById('square_side').innerHTML="The font size: " + difference;
  }

  function gotPoses(results){
    if(results.length > 0){
      console.log(results);
    leftWristX= results[0].pose.leftWrist.x;
    rightWristX= results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);  
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
  }
}

  function modelLoaded(){
    console.log("PoseNet is initialized");
  }

leftWristX=0;
rightWristX=0;
difference=0; 
noseX = 0;
noseY = 0;
