import {Step} from './types';

var current_step:Step;

export function initcode($step: Step) {
    const $ide = $step.$('#ide')!;
    const $code = $step.$$('.initcode').slice(0)[0];
    const $frame = $ide.$$('iframe').slice(0)[0];
    const sendcode = function() {
        $frame._el.contentWindow.postMessage($code._el.innerText, 'http://114.116.82.25:7000/')
    }
    sendcode();
    $frame._el.onload = function() {
        sendcode();
    }
}

export function initidehint($step: Step) {
    current_step = $step;
}
function showCorrectHint(idmsg:string) {
    if (current_step != undefined) {
        current_step.addHint(idmsg, {force: true});
    }
}
function showIncorrectHint(idmsg:string) {
    if (current_step != undefined) {
        current_step.addHint(idmsg, {force: true, class: 'incorrect'});
    }
}
// 这个方法是做勾选功能时加的，如果已经有该方法，将内容替换一下，如果之前没有加，直接全部复制
export function initcallback() {
    window.addEventListener("message", function(event) {
        const fields = event.data.split(':');
        if (fields.length != 2) {
            return;
        }
        const id = fields[0];
        const cb = document.getElementById(id);
        if (cb != null) {
            if (fields[1] === 'OK') {
                cb.checked = true;
                showCorrectHint('Well done!');
            } else {
                showIncorrectHint('That doesn’t look right.');
            }
        }
    }, false);
}

// export function initcallback() {
//     window.addEventListener("message", function(event) {
//         const fields = event.data.split(':');
//         if (fields.length != 2) {
//             return;
//         }
//         const id = fields[0];
//         const cb = document.getElementById(id);
//         if (cb != null) {
//             cb.checked = true;
//         }
//     }, false);
// }