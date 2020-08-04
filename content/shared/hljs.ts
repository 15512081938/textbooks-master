// =============================================================================
// highlightjs Loading Utility
// (c) Mathigon
// =============================================================================
/// <reference types="highlight.js"/>
import {loadScript} from '@mathigon/boost';
import {Step} from '../shared/types';
var hljsapi:HLJSApi;
export async function loadHljs() {
  const load = loadScript('/resources/shared/vendor/highlight.min.js');
  await Promise.all([load]);
  return {hljs: hljs};
}
export async function inithljs() {
    const {hljs} = await loadHljs();
    hljsapi = hljs;
}
export async function highlightcode($step: Step) {
    if (hljsapi == undefined) {
        await inithljs();
    }
    const $codes = $step.$$('pre code');
    $codes.forEach($code => {
        const text = hljsapi.highlightAuto($code.text);
        $code.html = text.value;
        $code.addClass('hljs');
    })
}