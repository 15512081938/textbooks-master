import {initcode, initcallback, initidehint} from '../shared/ide';
import {CoordinateSystem, EquationSystem, Gesture, Slider, Slideshow, Step, Tabbox} from '../shared/types';
import {highlightcode} from '../shared/hljs';

// 在一开始先调用initcallback方法，将IDE callback事件注册
initcallback();

export function declareavariable($step: Step) {
    
    initcode($step);
    highlightcode($step);
    
}
