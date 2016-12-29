/**
 * Get the position of the given element, relative to its offset parent
 * @method
 * @memberof Popper.Utils
 * @param {Element} element
 * @return {Object} position - Coordinates of the element and its `scrollTop`
 */
export default function getOffsetRect(element) {
    let elementRect;
    if (element.nodeName === 'HTML') {
        elementRect = {
            width: Math.max(element.clientWidth, window.innerWidth || 0),
            height: Math.max(element.clientHeight, window.innerHeight || 0),
            left: 0,
            top: 0,
        };
    }
    else {
        elementRect = {
            width: element.offsetWidth,
            height: element.offsetHeight,
            left: element.offsetLeft,
            top: element.offsetTop,
        };
    }

    elementRect.right = elementRect.left + elementRect.width;
    elementRect.bottom = elementRect.top + elementRect.height;

    // position
    return elementRect;
}
