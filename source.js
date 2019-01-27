//create a TimelineMax and make it repeat 3 times with 1 second between iterations
var tl = new TimelineMax({repeat:3, repeatDelay:1});

tl.fromTo(".daniel", 2, {x:450, y:800, opacity:0, scale:0}, {x:450, y:150, opacity:1, scale:1})
.fromTo(".thor", 1, {x:600, y:800, opacity:0}, {x:600, y:150, opacity:1})
.to(".letter--th", 2, {rotation:360}, "-=1")
.to(".letter--o", 2, {rotation:360}, "-=2")
.to(".letter--r", 2, {rotation:360}, "-=2")
.fromTo(".gestsson", 2, {x:350, y:800, opacity:0}, {x:350, y:150, opacity:1})
.to(".letter--s", 2, {rotation:720}, "-=1")
.fromTo(".letter--t", 2, {rotation:180}, {rotation:0}, "+=2")