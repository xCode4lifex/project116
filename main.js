noseX=0;
noseY=0;

function preload() {
    mustachenose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(mustachenose,noseX,noseY,30,30);
}

function take_snapshot() {
    save('mustache.png');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 10;
        noseY = results[0].pose.nose.y + 5;
        console.log("noseX = " + noseX);
        console.log("noseY = " + noseY);

    }
}