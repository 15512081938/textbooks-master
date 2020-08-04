import { Slider, Step } from '../shared/types';
// import { observe } from '@mathigon/boost';
import { ElementView, observe } from "@mathigon/boost/index";
import { delay } from "@mathigon/core/index";

function numberGrid($grid: ElementView, time: number, className: string,
    filter: (i: number) => boolean) {
    for (const $i of $grid.children) {
        if (!filter(+$i.text)) continue;
        delay(() => $i.addClass(className), time);
        time += 150;
    }
}

export function interactiveLessonIntroductionToAnimationFirst($step: Step) {
    console.log(">>> 此时进入到函数处理阶段");

    // 显示step完整参数
    console.log("\t>>> 完整$step属性");
    console.log($step);

    // 默认值
    $step.model.intValue = 0
    $step.model.floatValue = "0.00"
    $step.model.stringValue = '""'
    $step.model.booleanValue = "False"

    // 获取拖拽条
    const $sliderInt = $step.$('#slider-int') as Slider; // int
    const $sliderFloat = $step.$('#slider-float') as Slider; // float
    const $sliderString = $step.$('#slider-string') as Slider; // string
    // const $sliderBoolean = $step.$('#slider-boolean') as Slider; // boolean

    // 获取展示元素
    const $gridInt = $step.$('#int-grid')!; // int
    // const $gridInt = $step.$('.int-grid')!; // int
    // const $gridFloat = $step.$('#float-grid')!; // float
    const $gridFloat = $step.$('.wave')!; // float
    const $gridString = $step.$('#string-grid')!; // string
    // const $gridBoolean = $step.$('.boolean-grid')!; // boolean
    const $gridBooleanTrue = $step.$('#true-lamp')!; // boolean True
    const $gridBooleanFalse = $step.$('#false-lamp')!; // boolean False

    // 隐藏展示元素
    $gridInt.children.forEach(($el, $index) => { 
        if ($index != 0) {
            $el.addClass("hide-circle")
        }
    }); // int
    // $gridFloat.children.forEach($el => $el.addClass("hide-circle")) // float
    // $gridString.children.forEach($el => $el.addClass("hide-circle")); // string
    $gridString.children[1].text = '""';
    // $gridBoolean.children.forEach($el => $el.addClass("hide-circle")); // boolean

    // 监听int部分滑动操作
    $sliderInt.on('move', function () {
        $step.model.barCurrentInt = $sliderInt.current;
        $step.model.intValue = $sliderInt.current;

        $gridInt.children.forEach(($el, $index) => {
            if ($index > 0) {
                if ($index <= $sliderInt.current) {
                    $el.removeClass("hide-circle");
                    // alert("xiaoyu");
                }
                else {
                    $el.addClass("hide-circle");
                    // alert("dayu");
                }
            }
        });
    });

    // 监听float部分滑动操作
    $sliderFloat.on('move', function () {
        $step.model.floatValue = $sliderFloat.current / 100;
        let $sign : number = 1;

        console.log($step.model.barCurrentFloat, $sliderFloat.current);

        if ($step.model.barCurrentFloat > $sliderFloat.current) {
            $sign = -1;
        }
        console.log("sign: ");
        console.log($sign);
        console.log($gridFloat);
        // console.log($gridFloat._el.style);
        console.log($gridFloat._el.style['top']);
        // console.log($gridFloat._el.style['width']);
        // console.log($gridFloat._el.style['height']);
        
        // $gridFloat._el.style['top'] =  "10%";
        // $gridFloat._el.style['top'] = (90 + $sign * Math.abs($sliderFloat.current - $step.model.barCurrentFloat) * (-46)) + '%';
        // $gridFloat._el.style['width'] + 0.27;
        // $gridFloat._el.style['height'] + 0.43;
        
        // $gridFloat.style.top = "20%";

        $gridFloat._el.style['top'] = (90 - 46 * $step.model.floatValue) + '%';
        $gridFloat._el.style['height'] = (0 + 43 * $step.model.floatValue) + '%';
        // 宽度增益区间需优化
        if ($step.model.floatValue < 0.06) {
            // $gridFloat._el.style['width'] = (50 + 23 * $step.model.floatValue) + '%';
            $gridFloat._el.style['width'] = 47 + ($step.model.floatValue - 0.06) * 60 + '%';
        }
        if ($step.model.floatValue >= 0.06) {
            // $gridFloat._el.style['width'] = 53 + '%';
            $gridFloat._el.style['width'] = 53 + ($step.model.floatValue - 0.06) * 40 + '%';
        }
        if ($step.model.floatValue >= 0.1) {
            $gridFloat._el.style['width'] = 54 + ($step.model.floatValue - 0.1) * 100 + '%';
        }
        if ($step.model.floatValue >= 0.2) {
            // $gridFloat._el.style['width'] = '60%';
            $gridFloat._el.style['width'] = 60 + ($step.model.floatValue - 0.2) * 100 + '%';
        }
        if ($step.model.floatValue >= 0.3) {
            $gridFloat._el.style['width'] = '70%';
        }

        $step.model.barCurrentFloat = $sliderFloat.current;
        
    });

    // 监听string部分滑动操作
    $sliderString.on('move', function () {
        $step.model.barCurrentString = $sliderString.current;

        // $gridString.children.forEach(($el, index) => {
        //     if (index < $sliderString.current) {
        //         $el.removeClass("hide-circle");
        //     }
        //     else {
        //         $el.addClass("hide-circle");
        //     }
        // });
        if ($sliderString.current == 0) {
            $gridString.children[1].attributes[1].value = "165";
            $gridString.children[1].text = '""';
            $step.model.stringValue = '""';
        }
        if ($sliderString.current == 1) {
            $gridString.children[1].attributes[1].value = "150";
            $gridString.children[1].text = '"C"';
            $step.model.stringValue = '"C"';
        }
        if ($sliderString.current == 2) {
            $gridString.children[1].attributes[1].value = "135";
            $gridString.children[1].text = '"C A"';
            $step.model.stringValue = '"C A"';
        }
        if ($sliderString.current == 3) {
            $gridString.children[1].attributes[1].value = "120";
            $gridString.children[1].text = '"C A M"';
            $step.model.stringValue = '"C A M"';
        }
        if ($sliderString.current == 4) {
            $gridString.children[1].attributes[1].value = "105";
            $gridString.children[1].text = '"C A M L"';
            $step.model.stringValue = '"C A M L"';
        }
        if ($sliderString.current == 5) {
            $gridString.children[1].attributes[1].value = "86";
            $gridString.children[1].text = '"C A M L U"';
            $step.model.stringValue = '"C A M L U"';
        }
        if ($sliderString.current == 6) {
            $gridString.children[1].attributes[1].value = "70";
            $gridString.children[1].text = '"C A M L U N"';
            $step.model.stringValue = '"C A M L U N"';
        }
        if ($sliderString.current == 7) {
            $gridString.children[1].attributes[1].value = "63";
            $gridString.children[1].text = '"C A M L U N I"';
            $step.model.stringValue = '"C A M L U N I"';
        }
    });

    // 监听boolean部分滑动操作
    // $sliderBoolean.on('move', function () {
    //     $step.model.barCurrentBoolean = $sliderBoolean.current;

    //     if ($sliderBoolean.current == 20) {
    //         $gridBooleanFalse.addClass("hide-lamp");
    //         $gridBooleanTrue.removeClass("hide-lamp");
    //         $step.model.booleanValue = "True";
    //     } else if ($sliderBoolean.current == 0) {
    //         $gridBooleanTrue.addClass("hide-lamp");
    //         $gridBooleanFalse.removeClass("hide-lamp");
    //         $step.model.booleanValue = "False";
    //     }
    // });
    
    $step.model.m1 = 99;
    
    document.addEventListener('DOMContentLoaded', function () {
        // 获取展示元素
        // var $gridBooleanTrue = document.getElementById('true-lamp')!; // boolean True
        // var $gridBooleanFalse = document.getElementById('false-lamp')!; // boolean False
        //do something
        let clickSwitch = function() {
            let checked=document.getElementById("onoffswitch")&&document.getElementById("onoffswitch").checked;
            if (checked) {
                // console.log("在ON的状态下",checked);
                // $gridBooleanTrue.className = '';
                // $gridBooleanFalse.className = 'hide-lamp';
                $gridBooleanFalse.addClass("hide-lamp");
                $gridBooleanTrue.removeClass("hide-lamp");
            } else {
                // console.log("在OFF的状态下",checked);
                // $gridBooleanTrue.className = 'hide-lamp';
                // $gridBooleanFalse.className = '';
                $gridBooleanTrue.addClass("hide-lamp");
                $gridBooleanFalse.removeClass("hide-lamp");
            }
        };
        let obj=document.getElementById("onoffswitch")
        obj.onclick=function(){
            clickSwitch();
        };
    });
}
