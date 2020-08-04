import {initcode, initcallback, initidehint} from '../shared/ide';
import {CoordinateSystem, EquationSystem, Gesture, Slider, Slideshow, Step, Tabbox} from '../shared/types';

import {highlightcode} from '../shared/hljs';


// 在一开始先调用initcallback方法，将IDE callback事件注册
initcallback();

export function readingafile($step: Step) {
    
    initcode($step);
    highlightcode($step);
    initidehint($step);
    
    const buttons = $step.$$('.btn');
    buttons[0].on('click', () => {
    $step.addHint('you can use: import module')}); 
    buttons[1].on('click',() =>{
    $step.addHint('Remember: Python list comprehensions look like this:[what_will_replace_i for i in some_list_or_range]')}); 
    
}

export function iteratingthroughlines($step: Step) {
    
    initcode($step);
    highlightcode($step);
    
}

export function readingaline($step: Step) {
    
    initcode($step);
    highlightcode($step);
    
}

export function writingaline($step: Step) {
    
    initcode($step);
    highlightcode($step);
    
}

export function appendingtoafile($step: Step) {
    
    initcode($step);
    highlightcode($step);
    
}

export function whatiswithwith($step: Step) {
    
    initcode($step);
    highlightcode($step);
    
}

export function whatisacsvfile($step: Step) {
    
    initcode($step);
    highlightcode($step);
    
}

export function readingacsvfile($step: Step) {
    
    initcode($step);
    highlightcode($step);
    
}

export function readingdifferenttypesofcsvfiles($step: Step) {
    
    initcode($step);
    highlightcode($step);
    
}

export function writingacsvfile($step: Step) {
    
    initcode($step);
    highlightcode($step);
    
}

export function readingajsonfile($step: Step) {
    
    initcode($step);
    highlightcode($step);
    
}

export function writingajsonfile($step: Step) {
    
    initcode($step);
    highlightcode($step);
    
}

export function review($step: Step) {
    
    initcode($step);
    highlightcode($step);
    
}

export function freeformproject($step: Step) {
    
    initcode($step);
    highlightcode($step);
    
}