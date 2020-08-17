import { __addClass, __removeClass, __toggleClass } from './lib/utils/utils';

const domLoad = () => {

  console.log('domLoad');

  const d = document;
  const $body = d.body;

  // init

  const $buttons = document.querySelectorAll('.dashboard .button');

  const $buttonBackToDashboard = document.querySelectorAll('.homepage-link');

  Array.from($buttons).forEach( ($button) => {

    $button.addEventListener('click', (e) => {

      const relReference = $button.getAttribute('rel');
      console.log(relReference);

      if (relReference === 'mdh') {
        __addClass($body, 'mdh-map');
      }

      if (relReference === 'historylab') {
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


};


export default domLoad;
