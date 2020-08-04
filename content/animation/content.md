# Animation

> stage: foundations
> description: Learn to Animation.

## Interactive Lesson: Introduction to Animation

> section: interactive-lesson-animation-introduction
> id: interactive-lesson-animation-introduction

    mixin int-grid(n, fn)
      .int-grid
        - var i = 1
        while i <= n
          .n-cell= i
            if fn
              - var badge = fn(i)
              if badge
                .number-badge= badge
          - i += 1

    mixin string-grid(str)
      .string-grid
        - var j = 0
        - var length = str.length
        while j < length
          .n-cell=  str[j]
          - j += 1

---
### Animation

> section: interactive-lesson-introduction-to-animation-first
> id: interactive-lesson-introduction-to-animation-first

#### 带Play按钮和拖拽的Bar

    <!-- +int-grid(10) -->
    
    svg#int-grid.content-center(width=350 height=350)
      image(id="bucket" xlink:href="images/empty_bucket.png" x="0" y="0" height="100%" width="100%")
      image(id="ball-1" class="ball" xlink:href="images/ball.svg" x="80" y="246" height="50px" width="50px")
      image(id="ball-2" class="ball" xlink:href="images/ball.svg" x="125" y="246" height="50px" width="50px")
      image(id="ball-3" class="ball" xlink:href="images/ball.svg" x="170" y="246" height="50px" width="50px")
      image(id="ball-4" class="ball" xlink:href="images/ball.svg" x="215" y="246" height="50px" width="50px")
      image(id="ball-5" class="ball" xlink:href="images/ball.svg" x="61" y="195" height="50px" width="50px")
      image(id="ball-6" class="ball" xlink:href="images/ball.svg" x="102.5" y="209" height="50px" width="50px")
      image(id="ball-7" class="ball" xlink:href="images/ball.svg" x="147.5" y="209" height="50px" width="50px")
      image(id="ball-8" class="ball" xlink:href="images/ball.svg" x="192.5" y="209" height="50px" width="50px")
      image(id="ball-9" class="ball" xlink:href="images/ball.svg" x="236.3" y="206" height="50px" width="50px")
      image(id="ball-10" class="ball" xlink:href="images/ball.svg" x="93.3" y="166" height="50px" width="50px")
      image(id="ball-11" class="ball" xlink:href="images/ball.svg" x="136.3" y="166.5" height="50px" width="50px")
      image(id="ball-12" class="ball" xlink:href="images/ball.svg" x="180" y="166.8" height="50px" width="50px")
      image(id="ball-13" class="ball" xlink:href="images/ball.svg" x="223.3" y="164" height="50px" width="50px")

    x-slider#slider-int(steps=13)

#### int

当前Bar的位置：${barCurrentInt}

当前整型的值为：__${intValue}__

<hr />

    <!-- svg#float-grid.content-center(width=350 height=350) -->
      <!-- image(id="bucket" xlink:href="images/empty_bucket.png" x="0" y="0" height="100%" width="100%") -->
      <!-- image(id="wave" class="wave" xlink:href="images/wave.png" x="0" y="100" height="100%" width="100%") -->
      <!-- rect(class="wave" x="50" y="20" height="50" width="50" style="fill:blue; opacity:0.5") -->

    div#float-grid.content-center(style="position:relative; width:350px; height:350px; background-image: url(images/empty_bucket.png);background-attachment: local; background-position: center; background-repeat: no-repeat; background-size: 100% 100%;")
        div.wave(style="top: 90%; width: 47%; height: 0%;")

    x-slider#slider-float(steps=100)

#### float

当前Bar的位置：${barCurrentFloat}

当前水的位置：__${floatValue}__

<hr />

    <!-- +string-grid("CAMLUNI") -->

    svg#string-grid.content-center(width=350 height=350)
      image(id="bucket" xlink:href="images/empty_bucket.png" x="0" y="0" height="100%" width="100%")
      text(id="string-1" x="165" y="215" fill="darkgrey" style="font-size: xx-large;")

    x-slider#slider-string(steps=7)

#### string

当前Bar的位置：${barCurrentString}

当前字符串的值为：__${stringValue}__

<hr />

    svg#boolean-grid.content-center(width=350 height=350)
      image(id="bucket" xlink:href="images/empty_bucket.png" x="0" y="0" height="100%" width="100%")
      image(id="true-lamp" class="hide-lamp" xlink:href="images/true_lamp.png" x="25" y="40" width=300 height=265 alert="True")
      image(id="false-lamp" class="show-lamp" xlink:href="images/false_lamp.png" x="25" y="40" width=300 height=265 alert="True")

    <!-- div.testswitch
        input#onoffswitch.testswitch-checkbox(type="checkbox")
        lable.testswitch-label(for="onoffswitch")
            span.testswitch-inner(data-on="ON" data-off="OFF")
            span.testswitch-switch -->
    <div class="content-center">
    <div class="testswitch">
        <input class="testswitch-checkbox" id="onoffswitch" type="checkbox">
        <label class="testswitch-label" for="onoffswitch">
            <span class="testswitch-inner" data-on="开" data-off="关"></span>
            <span class="testswitch-switch"></span>
        </label>
    </div>
    </div>

    <!-- x-slider#slider-boolean(steps=20) -->

#### boolean

当前Bar的位置：${barCurrentBoolean}

当前的值为：__${booleanValue}__

<hr />

__m1__ 实时结果: ${m1}

当前Bar的宽度为：${barSteps}

<hr />

#### 带数值的Bar

这里是变量__n1__: ${n1}{n1|0|0,10,1} 。

__n1__ 实时结果：${n1}

<hr />

参考：

1. [SVG 属性参考](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute)

---
