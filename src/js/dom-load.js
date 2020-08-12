import { disabledEvent } from './functions.js';

const domLoad = () => {

  console.log('domLoad');

  const d = document;
  const $body = d.body;

  const $iframeGoogleMap = document.querySelector('#frame-google-map');

  $iframeGoogleMap .onload = (e) => {
    console.log("iframe loaded");


  };

};


export default domLoad;
