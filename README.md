# Zoom Planning Poker Computer Vision Overlay

Uses image classification on video snapshots to trigger overlays of the numbers 1, 3 and 5 or an image of the thumbs up emoji 👍. The purpose of this project is to make it clear, on video, what estimate you are giving to a story during [Planning Poker](https://en.wikipedia.org/wiki/Planning_poker).

Model trained on 6000 images and hosted using [Teachable Machine](https://teachablemachine.withgoogle.com/). 

## Training Your Own Model

To make this work for yourself you'll need to train your own model by training a new [Image Project](https://teachablemachine.withgoogle.com/train/image). Use the classes `Est1`, `Est3`, `Est5` and `ThumbsUp` to make the classification work out of the box, otherwise change the code to match the class names you pick.

When the model has finished training, click export and copy the link into `sketch.js`, assigning it to the `imageModelURL` variable.

You should now be able to run the sketch either locally or with the [p5.js editor](https://editor.p5js.org/).

## Displaying the Overlay on Zoom (or any video chat software)

There are probably multiple ways to do this but I used [Open Broadcast Studio (OBS)](https://obsproject.com/).

1. Open OBS and create a new video capture source, set it to your webcam.
2. Open the p5 web editor, click `file > share > present`. This will open a new tab with your p5 code running in it. Drag this into a new browser window.
3. Create a new window capture source in OBS. Set this to the browser window opened in (2).
4. Right click on the browser capture source in OBS. Apply the Chroma Key filter. Resizing both this source and the video source to allign the overlay position top right.
5. (Mac Users) Install [mac-obs-virtualcam](https://github.com/johnboiles/obs-mac-virtualcam). Download the `.pkg` file and run the installer. Restart OBS (you may also need to restart your machine, if step 6 is unsuccessful).
6. In OBS go to `tools > start virtualcam`. 
7. Join your Zoom meeting or Google Hangout, choose the OBS Virtualcam as your video source.
8. Impress your friends and collegues with your integuity and whimsy.

## TODO
- [ ] Use CDN for p5.js distro
- [ ] Add more fun gestures 
- [ ] Render gifs rather than images 
