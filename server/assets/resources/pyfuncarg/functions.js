var StepFunctions = (function (exports) {
    'use strict';

    function initcode($step) {
        const $ide = $step.$('#ide');
        const $code = $step.$$('.initcode').slice(0)[0];
        const $frame = $ide.$$('iframe').slice(0)[0];
        const sendcode = function () {
            $frame._el.contentWindow.postMessage($code._el.innerText, 'http://114.116.82.25:7000/');
        };
        sendcode();
        $frame._el.onload = function () {
            sendcode();
        };
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

    function parametersandarguments($step) {
        initcode($step);
    }
    function noneitsnothing($step) {
        initcode($step);
    }
    function defaultreturn($step) {
        initcode($step);
    }
    function defaultarguments($step) {
        initcode($step);
    }
    function usingkeywordandpositionalarguments($step) {
        initcode($step);
    }
    function keywordarguments($step) {
        initcode($step);
    }
    function dontusemutabledefaultarguments($step) {
        initcode($step);
    }
    function usingnoneasasentinel($step) {
        initcode($step);
    }
    function unpackingmultiplereturns($step) {
        initcode($step);
    }
    function positionalargumentunpacking($step) {
        initcode($step);
    }
    function keywordargumentunpacking($step) {
        initcode($step);
    }
    function usingbothkeywordandpositionalunpacking($step) {
        initcode($step);
    }
    function passingcontainersasarguments($step) {
        initcode($step);
    }
    function thenile($step) {
        initcode($step);
    }

    exports.defaultarguments = defaultarguments;
    exports.defaultreturn = defaultreturn;
    exports.dontusemutabledefaultarguments = dontusemutabledefaultarguments;
    exports.keywordarguments = keywordarguments;
    exports.keywordargumentunpacking = keywordargumentunpacking;
    exports.noneitsnothing = noneitsnothing;
    exports.parametersandarguments = parametersandarguments;
    exports.passingcontainersasarguments = passingcontainersasarguments;
    exports.positionalargumentunpacking = positionalargumentunpacking;
    exports.thenile = thenile;
    exports.unpackingmultiplereturns = unpackingmultiplereturns;
    exports.usingbothkeywordandpositionalunpacking = usingbothkeywordandpositionalunpacking;
    exports.usingkeywordandpositionalarguments = usingkeywordandpositionalarguments;
    exports.usingnoneasasentinel = usingnoneasasentinel;

    return exports;

}({}));
