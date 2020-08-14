import { Slider, Step } from '../shared/types';
// import { observe } from '@mathigon/boost';

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
    const $gridFloatRect = $step.$('#rect-float')!; // float-rect
    const $gridString = $step.$('#string-grid')!; // string
    const $gridStringRect = $step.$('#rect')!; // string
    const $gridStringLogo = $step.$('#logo')!; // string
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
    // $gridString.children[1].text = '""';
    // $gridBoolean.children.forEach($el => $el.addClass("hide-circle")); // boolean

    // 监听int部分滑动操作
    $sliderInt.on('move', function () {
        $step.model.barCurrentInt = $sliderInt.current;
        $step.model.intValue = $sliderInt.current;
        // document.getElementById('p-int').children[0].innerHTML = $sliderInt.current;
        // document.querySelector('#p-int>span').innerHTML = "<strong>" + $sliderInt.current + "</strong>";
        // TODO 优化显示效果
        // if ($sliderInt < 10) {
        //     document.querySelector('#span-int')?.innerHTML = "&nbsp;<strong>" + $sliderInt.current + "</strong>";
        // } else {
        //     document.querySelector('#span-int')?.innerHTML = "<strong>" + $sliderInt.current + "</strong>";
        // }
        document.querySelector('#span-int')?.innerHTML = "<strong>" + $sliderInt.current + "</strong>";

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

    // 位数补齐0
    function keepTwoDecimalPlaces (x: number) {
        let result = (x / 100).toString(); 
        
        let dotIndex = result.indexOf('.'); 
        if (dotIndex < 0) { 
            dotIndex = result.length; 
            result += '.'; 
        } 
        while (result.length <= dotIndex + 2) { 
            result += '0';
        }

        return result; 
    }

    // 监听float部分滑动操作
    $sliderFloat.on('move', function () {
        $step.model.floatValue = $sliderFloat.current / 100 / 10;
        // let floatValue:string = "0.00";

        // console.log($gridFloatRect);
        $gridFloatRect.attributes[2].value = String(156 - 66 * $step.model.floatValue);
        

        // console.log($step.model.barCurrentFloat, $sliderFloat.current);

        // console.log($gridFloat);
        // console.log($gridFloat._el.style);
        // console.log($gridFloat._el.style['top']);
        // console.log($gridFloat._el.style['width']);
        // console.log($gridFloat._el.style['height']);
        
        // $gridFloat._el.style['top'] =  "10%";
        // $gridFloat._el.style['top'] = (90 + $sign * Math.abs($sliderFloat.current - $step.model.barCurrentFloat) * (-46)) + '%';
        // $gridFloat._el.style['width'] + 0.27;
        // $gridFloat._el.style['height'] + 0.43;
        
        // $gridFloat.style.top = "20%";

        // $gridFloat._el.style['top'] = (90 - 46 * $step.model.floatValue) + '%';
        // $gridFloat._el.style['height'] = (0 + 43 * $step.model.floatValue) + '%';
        // // 宽度增益区间需优化
        // if ($step.model.floatValue < 0.06) {
        //     // $gridFloat._el.style['width'] = (50 + 23 * $step.model.floatValue) + '%';
        //     $gridFloat._el.style['width'] = 47 + ($step.model.floatValue - 0.06) * 60 + '%';
        // }
        // if ($step.model.floatValue >= 0.06) {
        //     // $gridFloat._el.style['width'] = 53 + '%';
        //     $gridFloat._el.style['width'] = 53 + ($step.model.floatValue - 0.06) * 40 + '%';
        // }
        // if ($step.model.floatValue >= 0.1) {
        //     $gridFloat._el.style['width'] = 54 + ($step.model.floatValue - 0.1) * 100 + '%';
        // }
        // if ($step.model.floatValue >= 0.2) {
        //     // $gridFloat._el.style['width'] = '60%';
        //     $gridFloat._el.style['width'] = 60 + ($step.model.floatValue - 0.2) * 100 + '%';
        // }
        // if ($step.model.floatValue >= 0.3) {
        //     $gridFloat._el.style['width'] = '70%';
        // }

        $step.model.barCurrentFloat = $sliderFloat.current;
        
        // 显示位数优化
        document.querySelector('#span-float')?.innerHTML = '<strong>' + keepTwoDecimalPlaces($sliderFloat.current) + '</strong>';
    });
    

    // 监听string部分滑动操作
    $sliderString.on('move', function () {
        $step.model.barCurrentString = $sliderString.current;

        // console.log($gridString);
        // console.log($gridStringRect);
        // console.log($gridStringLogo);
        
        if ($sliderString.current == 0) {
            // $gridString.children[1].attributes[1].value = "90";
            // $gridString.children[1].text = '""';
            // $step.model.stringValue = '""';
            $gridStringRect.attributes[3].value = "30%";
            $gridStringLogo.attributes[3].value = "32%";
            document.querySelector('#span-string')?.innerHTML = '<strong>""</strong>';
        }
        if ($sliderString.current == 1) {
            // $gridString.children[1].attributes[1].value = "85";
            // $gridString.children[1].text = '"C"';
            // $step.model.stringValue = '"C"';
            $gridStringRect.attributes[3].value = "56%";
            $gridStringLogo.attributes[3].value = "32%";
            document.querySelector('#span-string')?.innerHTML = '<strong>"C"</strong>';
        }
        if ($sliderString.current == 2) {
            // $gridString.children[1].attributes[1].value = "75";
            // $gridString.children[1].text = '"CA"';
            // $step.model.stringValue = '"CA"';
            $gridStringRect.attributes[3].value = "62%";
            $gridStringLogo.attributes[3].value = "26%";
            document.querySelector('#span-string')?.innerHTML = '<strong>"CA"</strong>';
        }
        if ($sliderString.current == 3) {
            // $gridString.children[1].attributes[1].value = "65";
            // $gridString.children[1].text = '"CAM"';
            // $step.model.stringValue = '"CAM"';
            $gridStringRect.attributes[3].value = "66%";
            $gridStringLogo.attributes[3].value = "20%";
            document.querySelector('#span-string')?.innerHTML = '<strong>"CAM"</strong>';
        }
        if ($sliderString.current == 4) {
            // $gridString.children[1].attributes[1].value = "55";
            // $gridString.children[1].text = '"CAML"';
            // $step.model.stringValue = '"CAML"';
            $gridStringRect.attributes[3].value = "72%";
            $gridStringLogo.attributes[3].value = "15%";
            document.querySelector('#span-string')?.innerHTML = '<strong>"CAML"</strong>';
        }
        if ($sliderString.current == 5) {
            // $gridString.children[1].attributes[1].value = "45";
            // $gridString.children[1].text = '"CAMLU"';
            // $step.model.stringValue = '"CAMLU"';
            $gridStringRect.attributes[3].value = "77%";
            $gridStringLogo.attributes[3].value = "10%";
            document.querySelector('#span-string')?.innerHTML = '<strong>"CAMLU"</strong>';
        }
        if ($sliderString.current == 6) {
            // $gridString.children[1].attributes[1].value = "35";
            // $gridString.children[1].text = '"CAMLUN"';
            // $step.model.stringValue = '"CAMLUN"';
            $gridStringRect.attributes[3].value = "82%";
            $gridStringLogo.attributes[3].value = "4%";
            document.querySelector('#span-string')?.innerHTML = '<strong>"CAMLUN"</strong>';
        }
        if ($sliderString.current == 7) {
            // $gridString.children[1].attributes[1].value = "30";
            // $gridString.children[1].text = '"CAMLUNI"';
            // $step.model.stringValue = '"CAMLUNI"';
            $gridStringRect.attributes[3].value = "100%";
            $gridStringLogo.attributes[3].value = "0%";
            document.querySelector('#span-string')?.innerHTML = '<strong>"CAMLUNI"</strong>';
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        //do something
        let clickSwitch = function() {
            let checked=document.getElementById("onoffswitch")&&document.getElementById("onoffswitch").checked;
            if (checked) {
                $gridBooleanFalse.addClass("hide-lamp");
                $gridBooleanTrue.removeClass("hide-lamp");
                $step.model.booleanValue = "True";
                document.querySelector('#span-boolean')?.innerHTML = "<strong>True</strong>";

                
            } else {
                $gridBooleanTrue.addClass("hide-lamp");
                $gridBooleanFalse.removeClass("hide-lamp");
                $step.model.booleanValue = "False";
                document.querySelector('#span-boolean')?.innerHTML = "<strong>False</strong>";
            }
        };
        let obj=document.getElementById("onoffswitch")
        obj.onclick=function(){
            clickSwitch();
        };
    });
}
