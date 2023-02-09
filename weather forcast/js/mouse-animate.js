try {
    var texts_index = 0;
    var texts = "I,love,you".split(",");
    document.documentElement.addEventListener('click', function (event) {
        var x = event.clientX, y = event.clientY - 10;
        var ele = document.createElement("span");
        ele.className = "effect_ele";
        ele.style.left = x + "px";
        ele.style.top = y + "px";
        // 只能在这设置,在css里就拿不到了
        ele.style.opacity = 1;

        var r = Math.floor(Math.random() * 255), g = Math.floor(Math.random() * 255), b = Math.floor(Math.random() * 255);
        ele.style.color = "rgb(" + r + "," + g + "," + b + ")";
        ele.innerText = texts[texts_index];
        texts_index = (texts_index + 1) % texts.length;
        textAnim(this.appendChild(ele), x, y, Math.floor(Math.random() * 10) % 2);
    });

    /* direction 1左 0右 */
    function textAnim(ele, x, y, direction) {
        // 往上移动，并减少opacity,直至opacity<=0则移除
        setTimeout(function () {
            if (ele.style.opacity <= 0) {
                document.documentElement.removeChild(ele);
                return;
            }
            y -= 1.2;
            if (direction == 0) {
                x += 1;
            } else {
                x -= 1;
            }
            ele.style.top = y + "px";
            ele.style.left = x + "px";
            ele.style.opacity = ele.style.opacity - 0.02;
            textAnim(ele, x, y, direction);
        }, 11);
    }
} catch (e) {
    console.log(e);
}

