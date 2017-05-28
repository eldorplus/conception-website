((doc, win) => {
    let docWidth = 750;
    let docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in win ? 'oorientationchange': 'resize',
        reCalc = () => {
            let clientWidth = docEl.getBoundingClientRect().width || docEl.clientWidth;
            if (!clientWidth) return;
            //docEl.style.fontSize = Math.max(Math.min(20 * (clientWidth / docWidth), 11.2), 8.55) * 5 + 'px';
        };

    docEl.setAttribute('data-dpr', win.navigator.appVersion.match(/iphone/gi) ? win.devicePixelRatio : 1);

    if (/iP(hone|od|ad)/.test(win.navigator.userAgent)) {
        doc.documentElement.classList.add('ios');
        if (parseInt(win.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8)
            doc.documentElement.classList.add('hairline');
    }

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, reCalc, false);
    doc.addEventListener('DOMContentLoaded', reCalc, false);
})(document, window);