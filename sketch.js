// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/aaso1gncM/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = '';

let est1;
let est1Fade = 0;

let est3;
let est3Fade = 0;

let est5;
let est5Fade = 0;

let thumbsUp;
let thumbsUpFade = 0;


// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  est1 = loadImage('assets/numberone.png');
  est3 = loadImage('assets/numberthree.png');
  est5 = loadImage('assets/numberfive.png');
  thumbsUp = loadImage('assets/thumbsup.png');
}

function setup() {
  createCanvas(1280, 720);
  // Create the video
  video = createCapture(VIDEO);
  video.size(160, 120);
  // video.hide();

  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0, 255, 0);
  imageMode(CORNER);

  // Draw the video
  // tint(255);
  // image(flippedVideo, 0, 0);
  if (label == 'Est1') {
    est1Fade = 255;
  } else if (label == 'Est3') {
    est3Fade = 255;
  } else if (label == 'Est5') {
    est5Fade = 255;
  } else if (label == 'ThumbsUp') {
    thumbsUpFade = 255;
  }

  if (est1Fade > 0) {
    tint(255, est1Fade);
    image(est1, 0, 0, 250, 250);
    est1Fade -= 50;
  }

  if (est3Fade > 0) {
    tint(255, est3Fade);
    image(est3, 0, 0, 250, 250);
    est3Fade -= 50;
  }

  if (est5Fade > 0) {
    tint(255, est5Fade);
    image(est5, 0, 0, 250, 250);
    est5Fade -= 50;
  }
  
  if (thumbsUpFade > 0) {
    tint(255, thumbsUpFade);
    image(thumbsUp, 0, 0, 250, 250);
    thumbsUpFade -= 50;
  }

}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  if (results[0].confidence  > 0.9) {
    label = results[0].label;
    console.log(label);
  }
  // Classifiy again!
  classifyVideo();
}