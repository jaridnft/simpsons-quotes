# Simpsons Quote Generator

#### Author: Jarid Warren [ <jaridwarren@gmail.com> ]

![alt-text](./assets/images/readme-images/demo.gif 'Simpsons Quote Preview')

## Motivation

I was inspired by @johnstonstu's "Quotes on Don" to create my own quote generator with a deep theme. After finding a [Simpsons quote API](https://thesimpsonsquoteapi.glitch.me/), and [Simpsons font](http://www.dailyfreefonts.com/fonts/info/125-Simpsons.html) I was off to the races!

My intention was to also practice more with Webpack as I've used Gulp in previous projects.

## Technology

- <img src="./assets/images/readme-images/js.svg" width="15"> JavaScript ES6 / <img src="./assets/images/readme-images/jquery.svg" width="40"> jQuery
- <img src="./assets/images/readme-images/npm.svg" width="20"> npm / <img src="./assets/images/readme-images/webpack.svg" width="15"> Webpack / <img src="./assets/images/readme-images/babel.svg" width="30"> Babel
- <img src="./assets/images/readme-images/sass.svg" width="20"> Sass / <img src="./assets/images/readme-images/css3.svg" width="12"> CSS3
- <img src="./assets/images/readme-images/html5.svg" width="12"> HTML5

## Code Sample

Each time a new quote is requested, a random sound (like Homer's famous 'doh!') is played with the following snippet:

```javascript
const soundClips = ["doh", "excellent", "woohoo", "yes"];
  ajaxCall();
  $(".button").click(() => {
    let soundIndex = Math.floor(Math.random() * 3.99);
    let buttonAudio = new Audio(
      `../../assets/sounds/${soundClips[soundIndex]}.wav`
    );
    buttonAudio.play();
```

## Setup

Download or clone repo, then run the following commands in terminal:

**Initialize NPM:**

`> npm init`

**Install Webpack:**

`> npm install`

**Build project:**

`> webpack`

**Build project for production (compression):**

`> webpack -p`

**Launch dev server to automatically update changes:**

`> webpack-dev-server`

## @TODO
