import { __addClass, __removeClass } from './lib/utils/utils';

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

      return false;

    });

  });


  Array.from($buttonBackToDashboard).forEach( ($button) => {

    $button.addEventListener('click', (e) => {

      __removeClass($body, 'mdh-map');
      __removeClass($body, 'historylab');

      return false;

    });

  });


};


export default domLoad;
