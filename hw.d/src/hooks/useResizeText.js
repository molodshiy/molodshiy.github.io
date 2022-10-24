import { useEffect } from 'react';
import debounce from '../utils/debounce';

function useResizeText(refParentElement) {
  useEffect(() => {
    if (refParentElement.current === null) {
      return;
    }

    const textElements = refParentElement.current.getElementsByClassName('resizeText');
    const setTextElements = refParentElement.current.getElementsByClassName('setResizeText');
    const setResizeHeight = refParentElement.current.getElementsByClassName('setResizeHeight');
    const minFont = [];

    function resizeText(element, index, payload) {
      const fontSize = window
        .getComputedStyle(element, null)
        .getPropertyValue('font-size')
        .slice(0, -2);
      const newFontSize = parseInt(fontSize) + payload;

      element.style.fontSize = newFontSize + 'px';

      minFont[index] = newFontSize;
    }

    function resizeCardText(element, index) {
      // console.log(element, element.scrollHeight, element.parentElement.offsetHeight);
      if (element.scrollHeight === element.parentElement.offsetHeight) {
        return;
      }

      if (element.scrollHeight > element.parentElement.offsetHeight * 0.95) {
        while (element.scrollHeight > element.parentElement.offsetHeight * 0.95) {
          resizeText(element, index, -1);
          // console.log(index, '-1', element.scrollHeight, element.parentElement.offsetHeight * 0.95);
          if (element.scrollHeight > element.parentElement.offsetHeight * 0.95) {
            // console.log(
            //   index,
            //   '+1 controll',
            //   element.scrollHeight,
            //   element.parentElement.offsetHeight * 0.95
            // );
            resizeText(element, index, 1);
            // console.log(
            //   index,
            //   '+1 after',
            //   element.scrollHeight,
            //   element.parentElement.offsetHeight * 0.95
            // );
            return;
          }
        }
      } else if (element.scrollHeight < element.parentElement.offsetHeight * 0.95) {
        while (element.scrollHeight < element.parentElement.offsetHeight * 0.95) {
          resizeText(element, index, 1);
          if (element.scrollHeight > element.parentElement.offsetHeight * 0.95) {
            // console.log(
            //   index,
            //   '-1 controll',
            //   element,
            //   element.scrollHeight,
            //   element.parentElement.offsetHeight * 0.95
            // );
            resizeText(element, index, -1);
            // console.log(
            //   index,
            //   '-1 after',
            //   element,
            //   element.scrollHeight,
            //   element.parentElement.offsetHeight * 0.95
            // );
            return;
          }

          // console.log(index, '+1', element.scrollHeight, element.parentElement.offsetHeight * 0.95);
        }
      }
    }

    function startResizeText() {
      for (let index = 0; index < textElements.length; index++) {
        resizeCardText(textElements[index], index);
      }

      // console.log(setTextElements);
      for (let element of setResizeHeight) {
        // console.log(minFont);
        element.style.height = 'inherit';
      }

      for (let element of setTextElements) {
        // console.log(minFont);
        element.style.fontSize = Math.min(...minFont) + 'px';
        element.style.color = '';
      }
    }

    function beforeDebounce() {
      for (let element of setTextElements) {
        element.style.fontSize = '16px';
        element.style.color = 'transparent';
      }
    }

    startResizeText();
    window.addEventListener('resize', debounce(beforeDebounce, startResizeText, 100));
  }, [refParentElement]);
}

export { useResizeText };
