const popmotion = require(popmotion);
const ball = document.querySelector(".ball");
popmotion.animate({
    from: "0px",
    to: "100px",
    repeat: Infinity,
    repeatType: "mirror",
    type: "spring",
    onUpdate (update) {
        console.log(update);
        ball.style.top = update;
    }
});

//# sourceMappingURL=index.b75bd955.js.map
