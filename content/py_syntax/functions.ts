import {highlightcode} from '../shared/hljs';
import {initcode, initcallback, initidehint} from '../shared/ide';
import {Step} from '../shared/types';

export function welcome($step: Step) {
    initcode($step);
    highlightcode($step);
        
}

export function comments1($step: Step) {
    initcode($step);
    highlightcode($step);
    
}

export function print46($step: Step) {
    initcode($step);
    highlightcode($step);
    
}

export function createinfo($step: Step) {
    const buttons = $step.$$('.btn');
    initcode($step);
    highlightcode($step);
    initidehint($step);
    buttons[0].on('click', () => {
        $step.addHint('variable_name = "This is a string"')}); 
    buttons[1].on('click',() =>{
        $step.addHint('Assign the variable same as the string before, but leave out the quotes since we’re storing a number numeric_variable = 10.00')}); 
    
}

export function text($step: Step) {
    initcode($step);
    highlightcode($step);
    
}

initcallback();

