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

    <div class="content-center" style="display: flex;">
        <!-- int -->
        <div style="flex: 1;">
            svg#int-grid.content-center(width=350 height=350)
                image(id="bucket" xlink:href="images/back-img-3.png" x="0" y="0" height="100%" width="100%")
                <!-- image(id="ball-1" class="ball" xlink:href="images/ball.svg" x="43" y="130" height="35px" width="35px") -->
                image(id="ball-1" class="ball" xlink:href="images/ball-1.png" x="43" y="123" height="35px" width="35px")
                image(id="ball-2" class="ball" xlink:href="images/ball-1.png" x="73" y="123" height="35px" width="35px")
                image(id="ball-3" class="ball" xlink:href="images/ball-1.png" x="103" y="123" height="35px" width="35px")
                image(id="ball-4" class="ball" xlink:href="images/ball-1.png" x="125" y="102" height="35px" width="35px")
                image(id="ball-5" class="ball" xlink:href="images/ball-1.png" x="58" y="97" height="35px" width="35px")
                image(id="ball-6" class="ball" xlink:href="images/ball-1.png" x="88" y="97" height="35px" width="35px")
                image(id="ball-7" class="ball" xlink:href="images/ball-1.png" x="28" y="97" height="35px" width="35px")
                image(id="ball-8" class="ball" xlink:href="images/ball-1.png" x="43" y="71" height="35px" width="35px")
                image(id="ball-9" class="ball" xlink:href="images/ball-1.png" x="74" y="71" height="35px" width="35px")
                image(id="ball-10" class="ball" xlink:href="images/ball-1.png" x="110" y="76" height="35px" width="35px")
                <!-- image(id="ball-11" class="ball" xlink:href="images/ball-1.png" x="130" y="59" height="35px" width="35px")
                image(id="ball-12" class="ball" xlink:href="images/ball-1.png" x="94" y="56" height="35px" width="35px")
                image(id="ball-13" class="ball" xlink:href="images/ball-1.png" x="58" y="52" height="35px" width="35px")
                image(id="ball-14" class="ball" xlink:href="images/ball-1.png" x="23" y="55" height="35px" width="35px") -->
            <p id="p-int">x<sub>1</sub>&nbsp;=&nbsp;<span id="span-int"><strong>0</strong></span></p>  
            x-slider#slider-int(steps=10)
            <p>int</p>
        </div>
        <!-- float -->
        <div style="flex: 1; position: relative;">            
            svg.content-center(width=350 height=350)
                <defs><clipPath id="clippath"><rect id="rect-float" x="0" y="156" width="100%" height="100%"></rect></clipPath></defs>
                image(id="peaceWater" xlink:href="images/water.png" x="0" y="0" height="100%" width="100%" style="clip-path:url(#clippath);")
                image(id="bucket" xlink:href="images/back-img-3.png" x="0" y="0" height="100%" width="100%")
            <!-- <div id="float-grid">
                <div class="wave" style="top: 48%; width: 47%; height: 0%;"></div>
            </div> -->
            <p>x<sub>2</sub>&nbsp;=&nbsp;<span><strong id="span-float">0.00</strong></span></p>
            x-slider#slider-float(steps=1000)
            <p>float</p>
        </div>
        <!-- string -->
        <div style="flex:1;">
            svg#string-grid.content-center(width=350 height=350)
                <defs><clipPath id="clipstring"><rect id="rect" x="0" y="0" width="30%" height="100%"></rect></clipPath></defs>
                image(id="bucket" xlink:href="images/back-img-3.png" x="0" y="0" height="100%" width="100%")
                image(id="logo" class="logo" xlink:href="images/LOGO.png" x="32%" y="0" height="100%" width="100%" style="clip-path:url(#clipstring);")
            <p>x<sub>3</sub>&nbsp;=&nbsp;<span><strong id="span-string">""</strong></span></p>
            x-slider#slider-string(steps=7)
            <p>string</p>
        </div>
        <!-- boolean -->
        <div style="flex:1;">
            svg#boolean-grid.content-center(width=350 height=350)
                image(id="bucket" xlink:href="images/back-img-3.png" x="0" y="0" height="100%" width="100%")
                image(id="true-lamp" class="hide-lamp" xlink:href="images/true_lamp.png" x="45" y="10" width=100 height=200 alert="True")
                image(id="false-lamp" xlink:href="images/false_lamp.png" x="45" y="10" width=100 height=200 alert="True")
            <p>x<sub>4</sub>&nbsp;=&nbsp;<span><strong id="span-boolean">False</strong></span></p>
            <div class="testswitch">
                <input class="testswitch-checkbox" id="onoffswitch" type="checkbox">
                <label class="testswitch-label" for="onoffswitch">
                    <span class="testswitch-inner" data-on="开" data-off="关"></span>
                    <span class="testswitch-switch"></span>
                </label>
            </div>
            <p>boolean</p>
        </div>
    </div>

<hr />

参考：

1. [SVG 属性参考](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute)

---
