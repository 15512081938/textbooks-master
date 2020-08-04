import {initcode} from '../shared/ide';
import {highlightcode} from '../shared/hljs';


// 在一开始先调用initcallback方法，将IDE callback事件注册
initcallback();

export function helloworld($step: Step) {
    // ...
    
    initcode($step);
    highlightcode($step);
    // ...
}
