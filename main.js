function setup(){
    canvas=createCanvas(500, 500);
  canvas.position(600,90);
    video.hide;
  video=createCapture( VIDEO );
  video.size(500, 500);
  PoseNet=ml5.poseNet(video, modelLoaded);
  PoseNet.on("pose", gotResult)
  }
  function draw(){
    textSize(difference);
    fill('black');
    text('Hello World', 50, 400);
    background("cadetblue");
  }
  function gotPoses(results){
    if(results.length > 0){
      console.log(results);
    leftWristX= results[0].pose.leftWrist.x;
    rightWristX= results[0].pose.rightWrist.x;
    difference = floor (leftWristX - rightWristX);  
  }
  function modelLoaded(){
    console.log("PoseNet is initialized");
  }
function gotResult(results){
if (results.length>0)
{
console.log(results)
}
leftWristX=0;
rightWristX=0;
difference=0; 
rightX=0;
leftX=0;
}
