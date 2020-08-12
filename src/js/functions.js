/* eslint-disable import/prefer-default-export */
export function disabledEvent(e){
  if (e.stopPropagation){
    e.stopPropagation();
  } else if (window.event){
    window.event.cancelBubble = true;
  }
  e.preventDefault();
  return false;
}
