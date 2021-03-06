import { __addClass, __removeClass, __toggleClass, __triggerEvent } from './lib/utils/utils';
import Zooming from 'zooming';

const domLoad = () => {

  console.log('domLoad');

  const d = document;
  const $body = d.body;

  // init

  const $buttons = document.querySelectorAll('.dashboard .button');
  const $buttonBackToDashboard = document.querySelectorAll('.homepage-link');

  const $mdhMapIframe = document.querySelector('.frame-mdh iframe');
  const $mdhIframe = document.querySelector('.frame-historylab iframe');

  // prevent context menu
  document.addEventListener('contextmenu', event => event.preventDefault());

  // define listeners
  Array.from($buttons).forEach( ($button) => {

    $button.addEventListener('click', (e) => {

      const relReference = $button.getAttribute('rel');
      console.log(relReference);

      if (relReference === 'mdh') {
        $mdhMapIframe.src = $mdhMapIframe.src;

        const $relEl = document.querySelector('.julius-fucik-map-window-info');
        __removeClass($relEl, 'is-open');
        __removeClass($body, 'infowindow-open');
        __addClass($body, 'mdh-map');
      }

      if (relReference === 'historylab') {

        $mdhIframe.src = $mdhIframe.src;
        __addClass($body, 'historylab');
      }

      if (relReference === 'archive') {
        __addClass($body, 'archive');
      }

      return false;

    });

  });


  Array.from($buttonBackToDashboard).forEach( ($button) => {

    $button.addEventListener('click', (e) => {

      __removeClass($body, 'mdh-map');
      __removeClass($body, 'historylab');
      __removeClass($body, 'archive');

      return false;

    });

  });

  const $buttonMore = document.querySelectorAll('.link-more');
  Array.from($buttonMore).forEach( ($button) => {
    $button.addEventListener('click', (e) => {

      const $relEl = document.querySelector($button.getAttribute('rel'));
      __toggleClass($relEl, 'is-open');
      __toggleClass($body, 'infowindow-open');
      return false;

    });

  });

  const $frameArchive = document.querySelector('.frame-archive');
  const $gallery = document.querySelector('[data-component="gallery"]');

  const zooming = new Zooming({
    zIndex: -1,
    enableDrag: false,
    onRelease: function(target) {

      zooming.close();
     __triggerEvent(target, 'click');
    },
    onBeforeGrab: function(target) {

    },
    onGrab: function(target) {

    },
    onClose: function(target) {

    },
    onOpen: function (target) {
      target.style.zIndex = '99';

      const galleryOverlay = document.querySelector('.gallery-overlay');

      // we have already opened once the gallery and overlay exists
      if (galleryOverlay) {

        __removeClass(galleryOverlay, 'is-hidden');

      } else {

        const overlay = document.querySelector('body > div[style]');
        console.log(overlay);
        const newOverlay = overlay.cloneNode(false);
        newOverlay.style.zIndex = '1';
        __addClass(newOverlay, 'gallery-overlay');


        const galleryContainer = target.parentElement.parentElement;
        galleryContainer.appendChild(newOverlay);
      }

      __addClass($frameArchive, 'image-open');

    },
    onClose: function (target) {
     const galleryOverlay = document.querySelector('.gallery-overlay');
      __addClass(galleryOverlay, 'is-hidden');
      __removeClass($frameArchive, 'image-open');
    }
  });
  zooming.listen('.img-zoomable');

};


export default domLoad;
