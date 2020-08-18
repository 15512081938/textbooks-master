import {initcode, initcallback} from '../shared/ide';
import {highlightcode} from '../shared/hljs';


// 在一开始先调用initcallback方法，将IDE callback事件注册
initcallback();

export function first($step: Step) {
    // ...
    
    initcode($step);
    highlightcode($step);
    

    // ...
}


export function structure($step: Step) {
    // ...
    
    highlightcode($step);

    // ...
}

export function output($step: Step) {
    // ...
    
    highlightcode($step);

    // ...
}

export function practice($step: Step) {
    // ...
    
    initcode($step);
    highlightcode($step);

    // ...
}

export function multiyline($step: Step) {
    // ...

    initcode($step);
    highlightcode($step);

    // ...
}

export function challenge_triangle($step: Step) {
    // ...
    
    initcode($step);
    highlightcode($step);

    // ...
}


export function challenge_name($step: Step) {
    // ...
    
    highlightcode($step);

    // ...
}
export function challenge_name2($step: Step) {
    // ...
    
    initcode($step);
    highlightcode($step);

    // ...
}

export function review($step: Step) {
    // ...
    
    highlightcode($step);

    // ...
}

export function letter($step: Step) {
    // ...
    
    highlightcode($step);
    initcode($step);

    // ...
}

export function test($step: Step) {
    // ...
    
    highlightcode($step);

    // ...
}